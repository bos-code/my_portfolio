"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "@/app/contact/contact.module.css";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
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
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className={styles.formStatus}>
        <span className="mono eyebrow">Message sent</span>
        <p>Thanks — I read every message and reply directly, usually within a day or two.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className={styles.honeypot}
      />

      <label className={styles.field}>
        <span className="mono eyebrow">Name</span>
        <input type="text" name="name" required maxLength={120} placeholder="Your name" />
      </label>

      <label className={styles.field}>
        <span className="mono eyebrow">Email</span>
        <input type="email" name="email" required maxLength={200} placeholder="you@example.com" />
      </label>

      <label className={styles.field}>
        <span className="mono eyebrow">Message</span>
        <textarea name="message" required maxLength={5000} rows={5} placeholder="What are you building?" />
      </label>

      {error && <p className={styles.formError}>{error}</p>}

      <button type="submit" className="button" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send message"} <ArrowUpRight size={17} />
      </button>
    </form>
  );
}
