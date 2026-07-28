import { NextResponse } from "next/server";
import { sendOwnerEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  let body: {
    name?: string;
    role?: string;
    quote?: string;
    rating?: string | number;
    company?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const role = (body.role || "").trim();
  const quote = (body.quote || "").trim();
  const rating = Number(body.rating);

  // Honeypot: real visitors never fill a field named "company" here.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !quote) {
    return NextResponse.json(
      { error: "Name and review text are required." },
      { status: 400 }
    );
  }

  if (quote.length > 2000) {
    return NextResponse.json({ error: "Review is too long." }, { status: 400 });
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return NextResponse.json({ error: "Rating must be between 1 and 5." }, { status: 400 });
  }

  try {
    await sendOwnerEmail({
      subject: `New portfolio review from ${name}`,
      text: `Name: ${name}\nRole/company: ${role || "(not provided)"}\nRating: ${rating}/5\n\n${quote}\n\n---\nAdd this to data/testimonials.ts once reviewed.`,
    });
  } catch (error) {
    console.error("Failed to send review email", error);
    return NextResponse.json(
      { error: "Could not submit the review right now. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
