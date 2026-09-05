import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";

import { getAdminDb } from "@/lib/firebase-admin";
import { sendContactNotification } from "@/lib/mail";
import { getClientIp, hash, rateLimit } from "@/lib/rate-limit";
import { contactSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  const ip = getClientIp(request);

  const limit = await rateLimit(`contact:${ip}`, {
    limit: 3,
    windowMs: 10 * 60 * 1000,
  });
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again in a few minutes." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSec) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check the form and try again.",
        fields: parsed.error.issues.map((issue) => issue.path.join(".")),
      },
      { status: 400 },
    );
  }

  const { website, ...data } = parsed.data;

  // Honeypot tripped: pretend it worked so bots get no signal.
  if (website) return NextResponse.json({ ok: true });

  let doc;
  try {
    doc = await getAdminDb().collection("contacts").add({
      ...data,
      createdAt: FieldValue.serverTimestamp(),
      status: "new",
      ipHash: hash(ip).slice(0, 32),
      userAgent: request.headers.get("user-agent")?.slice(0, 400) ?? "",
      emailSent: false,
    });
  } catch (error) {
    console.error("[contact] Firestore write failed:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  // The enquiry is already saved, so a mail failure must not surface to the
  // visitor. Record it on the document instead so it is visible in /admin.
  try {
    await sendContactNotification(parsed.data);
    await doc.update({ emailSent: true });
  } catch (error) {
    console.error("[contact] Notification email failed:", error);
    await doc
      .update({
        emailSent: false,
        emailError: error instanceof Error ? error.message : String(error),
      })
      .catch(() => {});
  }

  return NextResponse.json({ ok: true });
}
