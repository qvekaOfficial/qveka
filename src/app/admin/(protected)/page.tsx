import { Inbox } from "lucide-react";
import { Timestamp } from "firebase-admin/firestore";

import SubmissionCard, {
  type Submission,
} from "@/components/admin/SubmissionCard";
import { getAdminDb } from "@/lib/firebase-admin";
import { SUBMISSION_STATUSES, type SubmissionStatus } from "@/lib/schemas";

// The dashboard must never be prerendered or cached.
export const dynamic = "force-dynamic";

async function getSubmissions(): Promise<Submission[]> {
  const snapshot = await getAdminDb()
    .collection("contacts")
    .orderBy("createdAt", "desc")
    .limit(100)
    .get();

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    const createdAt = data.createdAt;

    return {
      id: doc.id,
      fullName: data.fullName ?? "",
      email: data.email ?? "",
      companyWebsite: data.companyWebsite ?? "",
      budget: data.budget ?? "",
      message: data.message ?? "",
      status: (data.status ?? "new") as SubmissionStatus,
      // Timestamps are not serialisable across the server/client boundary.
      createdAt:
        createdAt instanceof Timestamp ? createdAt.toDate().toISOString() : null,
      emailSent: data.emailSent !== false,
      emailError: data.emailError,
    };
  });
}

export default async function AdminDashboard() {
  const submissions = await getSubmissions();

  const counts = SUBMISSION_STATUSES.map((status) => ({
    status,
    count: submissions.filter((item) => item.status === status).length,
  }));

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-blue-600/90">
        Contact enquiries
      </p>
      <h1 className="mt-3 font-syne text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
        Submissions
      </h1>
      <div className="h-0.5 w-12 bg-blue-600 rounded-full mt-5" />

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-foreground/5 bg-white/60 backdrop-blur-sm p-5">
          <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            Total
          </p>
          <p className="mt-1 font-syne text-3xl font-extrabold text-foreground">
            {submissions.length}
          </p>
        </div>

        {counts.map(({ status, count }) => (
          <div
            key={status}
            className="rounded-2xl border border-foreground/5 bg-white/60 backdrop-blur-sm p-5"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
              {status}
            </p>
            <p className="mt-1 font-syne text-3xl font-extrabold text-foreground">
              {count}
            </p>
          </div>
        ))}
      </div>

      {submissions.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-foreground/10 bg-white/60 backdrop-blur-sm p-12 text-center">
          <Inbox className="w-8 h-8 mx-auto text-foreground/20" />
          <p className="mt-4 font-syne text-xl font-bold text-foreground">
            No enquiries yet
          </p>
          <p className="mt-2 font-sans text-sm text-foreground/50">
            Submissions from the contact form will appear here.
          </p>
        </div>
      ) : (
        <div className="mt-10 space-y-4">
          {submissions.map((item) => (
            <SubmissionCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {submissions.length === 100 && (
        <p className="mt-6 font-mono text-xs text-foreground/40">
          Showing the 100 most recent enquiries.
        </p>
      )}
    </main>
  );
}
