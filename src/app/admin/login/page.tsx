import { redirect } from "next/navigation";

import LoginForm from "@/components/admin/LoginForm";
import { getSessionUser } from "@/lib/auth";

export default async function AdminLoginPage() {
  // Send an already-signed-in admin straight to the dashboard.
  //
  // This check lives here rather than in proxy.ts on purpose. Proxy can only
  // see that a cookie exists, not whether it is valid — so redirecting there
  // would bounce a user holding a stale cookie to /admin, which would verify
  // it, fail, and redirect back here: an infinite loop. getSessionUser()
  // actually verifies, so an invalid cookie simply falls through to the form.
  const user = await getSessionUser();
  if (user) redirect("/admin");

  return <LoginForm />;
}
