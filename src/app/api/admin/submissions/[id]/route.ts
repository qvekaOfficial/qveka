import { NextResponse } from "next/server";

import { getSessionUser } from "@/lib/auth";
import { getAdminDb } from "@/lib/firebase-admin";
import { statusSchema } from "@/lib/schemas";

type Context = { params: Promise<{ id: string }> };

/**
 * Route handlers are a separate entry point and are NOT covered by the
 * /admin layout guard, so each one re-verifies the session itself.
 */
async function requireAdmin() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorised." }, { status: 401 });
  }
  return null;
}

export async function PATCH(request: Request, ctx: Context) {
  const denied = await requireAdmin();
  if (denied) return denied;

  const { id } = await ctx.params;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = statusSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }

  try {
    await getAdminDb()
      .collection("contacts")
      .doc(id)
      .update({ status: parsed.data.status });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[admin] Status update failed:", error);
    return NextResponse.json({ error: "Update failed." }, { status: 500 });
  }
}

export async function DELETE(_request: Request, ctx: Context) {
  const denied = await requireAdmin();
  if (denied) return denied;

  const { id } = await ctx.params;

  try {
    await getAdminDb().collection("contacts").doc(id).delete();
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[admin] Delete failed:", error);
    return NextResponse.json({ error: "Delete failed." }, { status: 500 });
  }
}
