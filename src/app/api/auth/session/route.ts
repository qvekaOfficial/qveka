import { NextResponse } from "next/server";

import {
  SESSION_COOKIE,
  SESSION_MAX_AGE_MS,
  getSessionUser,
  isAdminEmail,
} from "@/lib/auth";
import { getAdminAuth } from "@/lib/firebase-admin";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

/** Exchange a Firebase ID token for an httpOnly session cookie. */
export async function POST(request: Request) {
  const ip = getClientIp(request);

  const limit = await rateLimit(`login:${ip}`, {
    limit: 5,
    windowMs: 15 * 60 * 1000,
  });
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again later." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSec) } },
    );
  }

  let idToken: unknown;
  try {
    ({ idToken } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof idToken !== "string" || !idToken) {
    return NextResponse.json({ error: "Missing token." }, { status: 400 });
  }

  try {
    const decoded = await getAdminAuth().verifyIdToken(idToken, true);

    // The .env allowlist: a stray Firebase user can never reach the dashboard.
    if (!isAdminEmail(decoded.email)) {
      return NextResponse.json(
        { error: "This account is not authorised." },
        { status: 403 },
      );
    }

    const sessionCookie = await getAdminAuth().createSessionCookie(idToken, {
      expiresIn: SESSION_MAX_AGE_MS,
    });

    const response = NextResponse.json({ ok: true });
    response.cookies.set({
      name: SESSION_COOKIE,
      value: sessionCookie,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: SESSION_MAX_AGE_MS / 1000,
    });
    return response;
  } catch (error) {
    console.error("[auth] Session creation failed:", error);
    return NextResponse.json({ error: "Could not sign in." }, { status: 401 });
  }
}

/** Log out: revoke refresh tokens everywhere and clear the cookie. */
export async function DELETE() {
  const user = await getSessionUser();
  if (user) {
    await getAdminAuth().revokeRefreshTokens(user.uid).catch(() => {});
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: SESSION_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return response;
}
