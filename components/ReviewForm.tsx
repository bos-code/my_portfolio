"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Star } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export function ReviewForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [rating, setRating] = useState(5);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          role: data.get("role"),
          quote: data.get("quote"),
          rating,
          company: data.get("company"), // honeypot
        }),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus("error");
        setError(payload.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
      form.reset();
      setRating(5);
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <p className="review-form-status">
        Thanks for taking the time — I read every review myself and add it here once it's confirmed.
      </p>
    );
  }

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: -9999, width: 1, height: 1, opacity: 0 }}
      />

      <div className="review-form-row">
        <label className="review-field">
          <span className="mono eyebrow">Your name</span>
          <input type="text" name="name" required maxLength={120} placeholder="Jane Doe" />
        </label>
        <label className="review-field">
          <span className="mono eyebrow">Role / company (optional)</span>
          <input type="text" name="role" maxLength={120} placeholder="Product Lead, Acme" />
        </label>
      </div>

      <label className="review-field">
        <span className="mono eyebrow">Rating</span>
        <div style={{ display: "flex", gap: 6 }}>
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setRating(value)}
              aria-label={`${value} star${value === 1 ? "" : "s"}`}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
            >
              <Star
                size={22}
                fill={value <= rating ? "var(--red)" : "none"}
                color={value <= rating ? "var(--red)" : "var(--muted)"}
              />
            </button>
          ))}
        </div>
      </label>

      <label className="review-field">
        <span className="mono eyebrow">Your review</span>
        <textarea name="quote" required maxLength={2000} rows={4} placeholder="What was it like working together?" />
      </label>

      {error && <p className="review-form-error">{error}</p>}

      <button type="submit" className="button" disabled={status === "sending"} style={{ alignSelf: "flex-start" }}>
        {status === "sending" ? "Sending..." : "Submit review"} <ArrowUpRight size={17} />
      </button>
    </form>
  );
}
