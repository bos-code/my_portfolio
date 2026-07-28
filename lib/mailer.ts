import nodemailer from "nodemailer";

const OWNER_EMAIL = "chidera9713@gmail.com";

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error(
      "Email is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS."
    );
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function sendOwnerEmail({
  subject,
  text,
  replyTo,
}: {
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const transporter = getTransporter();
  const from = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;
  const to = process.env.CONTACT_TO_EMAIL || OWNER_EMAIL;

  await transporter.sendMail({ from, to, subject, text, replyTo });
}
