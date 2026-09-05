import "server-only";

import { createHash } from "crypto";

import { getAdminDb } from "@/lib/firebase-admin";

type Options = {
  /** Max requests allowed inside the window. */
  limit: number;
  /** Window length in milliseconds. */
  windowMs: number;
};

type Result = { ok: boolean; retryAfterSec: number };

/**
 * Reads the caller's IP from the proxy headers Vercel sets.
 * `x-forwarded-for` is a comma-separated chain; the first entry is the client.
 */
export function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export function hash(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

export type WindowState = { count: number; windowStart: number };

/**
 * The fixed-window decision, kept pure so it can be tested without Firestore.
 * `previous` is undefined when this key has never been seen.
 */
export function nextWindow(
  previous: WindowState | undefined,
  now: number,
  { limit, windowMs }: Options,
): WindowState & Result {
  const expired = !previous || now - previous.windowStart >= windowMs;
  const windowStart = expired ? now : previous.windowStart;
  const count = expired ? 1 : previous.count + 1;

  return {
    count,
    windowStart,
    ok: count <= limit,
    retryAfterSec:
      count <= limit
        ? 0
        : Math.max(1, Math.ceil((windowStart + windowMs - now) / 1000)),
  };
}

/**
 * Fixed-window limiter backed by Firestore.
 *
 * An in-memory counter is useless on Vercel because each invocation can land on
 * a fresh serverless instance, so the counter lives in a store every instance
 * shares. Firestore is already a dependency here, which avoids adding Redis.
 */
export async function rateLimit(
  key: string,
  options: Options,
): Promise<Result> {
  try {
    const db = getAdminDb();
    const ref = db.collection("rate_limits").doc(hash(key).slice(0, 32));

    return await db.runTransaction(async (tx) => {
      const snap = await tx.get(ref);
      const previous = snap.data() as WindowState | undefined;

      const { count, windowStart, ok, retryAfterSec } = nextWindow(
        previous,
        Date.now(),
        options,
      );

      tx.set(ref, {
        count,
        windowStart,
        // For an optional Firestore TTL policy on this field, so spent
        // limiter documents clean themselves up.
        expiresAt: new Date(windowStart + options.windowMs),
      });

      return { ok, retryAfterSec };
    });
  } catch {
    // A limiter outage must not take the form down with it.
    return { ok: true, retryAfterSec: 0 };
  }
}
