import { NextResponse } from "next/server";
import { sendOwnerEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string; company?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  // Honeypot: real visitors never fill a field named "company" here.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are all required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  try {
    await sendOwnerEmail({
      subject: `Portfolio contact form: ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      replyTo: email,
    });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      { error: "Could not send the message right now. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
