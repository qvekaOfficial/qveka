"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  Archive,
  ChevronDown,
  Globe,
  Mail,
  Trash2,
} from "lucide-react";

import { budgetLabel } from "@/lib/schemas";
import type { SubmissionStatus } from "@/lib/schemas";
import { cn } from "@/lib/utils";

export type Submission = {
  id: string;
  fullName: string;
  email: string;
  companyWebsite: string;
  budget: string;
  message: string;
  status: SubmissionStatus;
  /** ISO string — Firestore Timestamps are not serialisable as props. */
  createdAt: string | null;
  emailSent: boolean;
  emailError?: string;
};

const STATUS_STYLES: Record<SubmissionStatus, string> = {
  new: "border-blue-600/20 text-blue-600/90 bg-blue-50",
  read: "border-foreground/15 text-foreground/50 bg-white",
  archived: "border-foreground/10 text-foreground/35 bg-muted",
};

function formatDate(iso: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function SubmissionCard({ item }: { item: Submission }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(item.status === "new");
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const mutate = async (init: RequestInit) => {
    setError(null);
    const response = await fetch(`/api/admin/submissions/${item.id}`, init);
    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      setError(body.error ?? "Action failed.");
      return;
    }
    startTransition(() => router.refresh());
  };

  const setStatus = (status: SubmissionStatus) =>
    mutate({
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

  const remove = () => {
    if (!confirm(`Delete the enquiry from ${item.fullName}?`)) return;
    return mutate({ method: "DELETE" });
  };

  return (
    <div
      className={cn(
        "group rounded-2xl border border-foreground/5 bg-white/60 backdrop-blur-sm p-6 transition-shadow duration-300 hover:shadow-xl",
        isPending && "opacity-60",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-syne text-lg font-bold tracking-tight text-foreground">
              {item.fullName}
            </h3>
            <span
              className={cn(
                "rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest",
                STATUS_STYLES[item.status],
              )}
            >
              {item.status}
            </span>
            {!item.emailSent && (
              <span
                title={item.emailError ?? "The notification email did not send"}
                className="inline-flex items-center gap-1 rounded-full border border-red-500/25 bg-red-50 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-red-600"
              >
                <AlertTriangle className="w-3 h-3" />
                Not emailed
              </span>
            )}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-sm text-foreground/60">
            <a
              href={`mailto:${item.email}`}
              className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors break-all"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              {item.email}
            </a>
            <span className="inline-flex items-center gap-1.5 break-all">
              <Globe className="w-3.5 h-3.5 shrink-0" />
              {item.companyWebsite}
            </span>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-foreground/40">
            <span className="text-blue-600/90">
              {budgetLabel(item.budget)}
            </span>
            <span>·</span>
            <span>{formatDate(item.createdAt)}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse message" : "Expand message"}
          className="shrink-0 w-9 h-9 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-colors"
        >
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              isOpen && "rotate-180",
            )}
          />
        </button>
      </div>

      {isOpen && (
        <>
          <p className="mt-5 whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground/70 border-l-2 border-blue-600/20 pl-4">
            {item.message}
          </p>

          {error && (
            <p className="mt-3 text-red-500 text-xs font-mono" role="alert">
              {error}
            </p>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${item.email}?subject=${encodeURIComponent("Re: your enquiry to Qveka")}`}
              className="inline-flex items-center gap-1.5 bg-foreground text-background px-4 py-2 rounded-full text-xs font-mono font-medium hover:bg-foreground/90 transition-all duration-300"
            >
              <Mail className="w-3.5 h-3.5" />
              Reply
            </a>

            {item.status !== "read" && (
              <button
                type="button"
                onClick={() => setStatus("read")}
                disabled={isPending}
                className="inline-flex items-center gap-1.5 border border-foreground/15 px-4 py-2 rounded-full text-xs font-mono hover:border-blue-600/40 hover:text-blue-600 transition-colors disabled:opacity-60"
              >
                Mark read
              </button>
            )}

            {item.status !== "archived" && (
              <button
                type="button"
                onClick={() => setStatus("archived")}
                disabled={isPending}
                className="inline-flex items-center gap-1.5 border border-foreground/15 px-4 py-2 rounded-full text-xs font-mono hover:border-blue-600/40 hover:text-blue-600 transition-colors disabled:opacity-60"
              >
                <Archive className="w-3.5 h-3.5" />
                Archive
              </button>
            )}

            {item.status === "archived" && (
              <button
                type="button"
                onClick={() => setStatus("new")}
                disabled={isPending}
                className="inline-flex items-center gap-1.5 border border-foreground/15 px-4 py-2 rounded-full text-xs font-mono hover:border-blue-600/40 hover:text-blue-600 transition-colors disabled:opacity-60"
              >
                Restore
              </button>
            )}

            <button
              type="button"
              onClick={remove}
              disabled={isPending}
              className="ml-auto inline-flex items-center gap-1.5 border border-red-500/20 text-red-600 px-4 py-2 rounded-full text-xs font-mono hover:bg-red-50 transition-colors disabled:opacity-60"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
