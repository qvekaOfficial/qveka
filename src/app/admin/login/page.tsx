import { redirect } from "next/navigation";

import LoginForm from "@/components/admin/LoginForm";
import { getSessionUser } from "@/lib/auth";

export default async function AdminLoginPage() {
  // Send an already-signed-in admin straight to the dashboard.
  // getSessionUser() actually verifies the cookie, so an invalid cookie
  // simply falls through to the form instead of redirect-looping.
  const user = await getSessionUser();
  if (user) redirect("/admin");

  return <LoginForm />;
}
