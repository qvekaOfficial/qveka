import "server-only";

import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

import { budgetLabel, type ContactInput } from "@/lib/schemas";

let cached: Transporter | null = null;

function transporter() {
  if (cached) return cached;

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    throw new Error("SMTP_USER and SMTP_PASS must be set to send email");
  }

  const host = process.env.SMTP_HOST;

  cached = host
    ? // Any standard SMTP provider — Hostinger, Titan, Zoho, a VPS relay.
      nodemailer.createTransport({
        host,
        port: Number(process.env.SMTP_PORT ?? 465),
        // Port 465 is implicit TLS; 587 upgrades via STARTTLS.
        secure: Number(process.env.SMTP_PORT ?? 465) === 465,
        auth: { user, pass },
      })
    : // No host configured: fall back to Gmail's well-known settings.
      nodemailer.createTransport({
        service: "gmail",
        auth: { user, pass },
      });

  return cached;
}

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char]!,
  );

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 16px;border-bottom:1px solid #e5e5e5;font:600 12px/1.4 ui-monospace,monospace;letter-spacing:.08em;text-transform:uppercase;color:#5a5a5a;white-space:nowrap;vertical-align:top;">${label}</td>
      <td style="padding:10px 16px;border-bottom:1px solid #e5e5e5;font:14px/1.6 system-ui,sans-serif;color:#0a0a0a;">${value}</td>
    </tr>`;
}

export async function sendContactNotification(data: ContactInput) {
  const to = process.env.NOTIFY_EMAIL;
  if (!to) throw new Error("NOTIFY_EMAIL must be set");

  const name = escapeHtml(data.fullName);
  const email = escapeHtml(data.email);
  const site = escapeHtml(data.companyWebsite);

  const html = `
  <div style="background:#f8f7f5;padding:32px 16px;">
    <div style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #e5e5e5;border-radius:16px;overflow:hidden;">
      <div style="background:#1e3a8a;padding:24px;">
        <p style="margin:0;font:600 11px/1.4 ui-monospace,monospace;letter-spacing:.16em;text-transform:uppercase;color:#93b4ff;">Qveka — New enquiry</p>
        <h1 style="margin:6px 0 0;font:700 22px/1.3 system-ui,sans-serif;color:#fff;">${name}</h1>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Name", name)}
        ${row("Email", `<a href="mailto:${email}" style="color:#1e3a8a;">${email}</a>`)}
        ${row("Website", site)}
        ${row("Budget", escapeHtml(budgetLabel(data.budget)))}
        ${row("Message", escapeHtml(data.message).replace(/\n/g, "<br>"))}
        ${row("Received", escapeHtml(new Date().toUTCString()))}
      </table>
      <div style="padding:24px;">
        <a href="mailto:${email}?subject=${encodeURIComponent("Re: your enquiry to Qveka")}"
           style="display:inline-block;background:#1e3a8a;color:#fff;text-decoration:none;padding:12px 24px;border-radius:999px;font:600 14px system-ui,sans-serif;">
          Reply to ${name}
        </a>
      </div>
    </div>
  </div>`;

  const text = [
    `New enquiry from ${data.fullName}`,
    ``,
    `Email:    ${data.email}`,
    `Website:  ${data.companyWebsite}`,
    `Budget:   ${budgetLabel(data.budget)}`,
    ``,
    data.message,
  ].join("\n");

  await transporter().sendMail({
    from: `"Qveka Website" <${process.env.SMTP_USER}>`,
    to,
    // Hitting reply in Gmail goes straight to the enquirer.
    replyTo: `"${data.fullName}" <${data.email}>`,
    subject: `New enquiry — ${data.fullName} (${budgetLabel(data.budget)})`,
    text,
    html,
  });
}
