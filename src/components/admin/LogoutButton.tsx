"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    await fetch("/api/auth/session", { method: "DELETE" }).catch(() => {});
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isLoading}
      className="inline-flex items-center gap-1.5 bg-foreground text-background px-5 py-2.5 rounded-full text-xs font-mono font-medium hover:bg-foreground/90 transition-all duration-300 disabled:opacity-60"
    >
      <LogOut className="w-3.5 h-3.5" />
      {isLoading ? "Signing out…" : "Sign out"}
    </button>
  );
}
