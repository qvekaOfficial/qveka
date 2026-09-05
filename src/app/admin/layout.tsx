import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Qveka",
  // Keep the dashboard and its login page out of search results.
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
