import "server-only";

import { cookies } from "next/headers";
import type { DecodedIdToken } from "firebase-admin/auth";

import { getAdminAuth } from "@/lib/firebase-admin";

export const SESSION_COOKIE = "__session";

/** Firebase caps session cookies at 14 days; 5 is a comfortable middle. */
export const SESSION_MAX_AGE_MS = 5 * 24 * 60 * 60 * 1000;

/** The single address allowed to reach the dashboard, configured in .env. */
export function adminEmail() {
  return process.env.ADMIN_EMAIL?.trim().toLowerCase() ?? "";
}

export function isAdminEmail(email?: string | null) {
  const allowed = adminEmail();
  return Boolean(allowed && email && email.trim().toLowerCase() === allowed);
}

/**
 * Verifies the session cookie and returns the admin, or null.
 * Never throws: an expired, revoked or tampered cookie is simply "logged out".
 */
export async function getSessionUser(): Promise<DecodedIdToken | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  if (!session) return null;

  try {
    // `true` also checks that the session has not been revoked.
    const decoded = await getAdminAuth().verifySessionCookie(session, true);
    return isAdminEmail(decoded.email) ? decoded : null;
  } catch {
    return null;
  }
}
