import { redirect } from "next/navigation";

import LogoutButton from "@/components/admin/LogoutButton";
import { getSessionUser } from "@/lib/auth";

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The authoritative auth check. proxy.ts only does a cookie-presence
  // redirect; this is what actually verifies the session.
  const user = await getSessionUser();
  if (!user) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-muted">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-foreground/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-4">
          <div>
            {/* <span className="font-syne text-lg font-extrabold tracking-tight text-foreground">
              Qveka
            </span>
            <span className="ml-2 font-mono text-xs uppercase tracking-widest text-blue-600/90">
              Admin
            </span> */}
            <span className="font-syne text-lg font-extrabold tracking-tight text-foreground">
              Qveka Admin
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-mono text-xs text-foreground/50">
              {user.email}
            </span>
            <LogoutButton />
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}
