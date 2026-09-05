/**
 * Verifies SMTP credentials and sends one test email.
 *   npm run test:email
 * Reads .env.local and mirrors the transport logic in src/lib/mail.ts.
 */
import fs from "fs";
import nodemailer from "nodemailer";

for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) {
  const m = line.match(/^([A-Z_0-9]+)=([\s\S]*)$/);
  if (m) process.env[m[1]] = m[2].trim().replace(/^"|"$/g, "");
}

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL } = process.env;

if (!SMTP_USER || !SMTP_PASS) {
  console.error("SMTP_USER and SMTP_PASS must both be set in .env.local");
  process.exit(1);
}

const port = Number(SMTP_PORT ?? 465);
const config = SMTP_HOST
  ? { host: SMTP_HOST, port, secure: port === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } }
  : { service: "gmail", auth: { user: SMTP_USER, pass: SMTP_PASS } };

console.log(`Transport : ${SMTP_HOST ? `${SMTP_HOST}:${port} (secure=${port === 465})` : "gmail"}`);
console.log(`From      : ${SMTP_USER}`);
console.log(`To        : ${NOTIFY_EMAIL}\n`);

const transport = nodemailer.createTransport(config);

try {
  await transport.verify();
  console.log("Connection + credentials: OK");
} catch (e) {
  console.error("Connection FAILED:", e.message);
  if (/Invalid login|535|Username and Password not accepted/i.test(e.message))
    console.error("\n-> Wrong username or password. On Gmail this must be a 16-char App\n   Password, not your account password. On Hostinger it is the mailbox password.");
  else if (/ENOTFOUND|EAI_AGAIN/i.test(e.message))
    console.error(`\n-> Host "${SMTP_HOST}" did not resolve. Check SMTP_HOST for typos.`);
  else if (/ETIMEDOUT|ECONNREFUSED/i.test(e.message))
    console.error(`\n-> Nothing accepting connections on port ${port}. Try 587 (and SMTP_PORT=587).`);
  process.exit(1);
}

try {
  const info = await transport.sendMail({
    from: `"Qveka Website" <${SMTP_USER}>`,
    to: NOTIFY_EMAIL,
    subject: "Qveka SMTP test",
    text: "If you are reading this, the contact form can send email.",
  });
  console.log(`Test email sent: ${info.messageId}`);
  console.log(`\nCheck ${NOTIFY_EMAIL} (including Spam - the first send often lands there).`);
} catch (e) {
  console.error("Send FAILED:", e.message);
  process.exit(1);
}
