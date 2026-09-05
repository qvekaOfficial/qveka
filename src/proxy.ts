import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Next.js 16 renamed `middleware.ts` to `proxy.ts`.
// This is an optimistic redirect for UX only — it never validates the cookie's
// contents. The authoritative check is `getSessionUser()` in the /admin layout.
export function proxy(request: NextRequest) {
  if (request.cookies.has("__session")) return NextResponse.next();

  const url = new URL("/admin/login", request.url);
  return NextResponse.redirect(url);
}

export const config = {
  // Guards /admin and everything below it, except the login page itself.
  matcher: ["/admin", "/admin/((?!login).*)"],
};
