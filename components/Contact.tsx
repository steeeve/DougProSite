"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Garden clean up",
  "Stump grinding",
  "Mowing",
  "Sprinkler systems",
  "Pathways",
  "Fences",
  "Junk removal",
  "General repairs",
  "Snow removal",
  "Something else",
];

// Formspree form ID (the last path segment of your Formspree endpoint).
// Set NEXT_PUBLIC_FORMSPREE_ID in .env.local so it's available in the browser.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [note, setNote] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (!FORMSPREE_ID) {
      setNote("This form isn't configured yet. Please email Doug directly at doug.moisuk@gmail.com.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          service,
          message,
          _subject: `New quote request from ${name}`,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setNote(
        `Thanks, ${name || "friend"}! Your message is on its way to Doug — he'll be in touch soon.`
      );
      setName("");
      setEmail("");
      setService(SERVICE_OPTIONS[0]);
      setMessage("");
    } catch {
      setStatus("error");
      setNote("Something went wrong sending your message. Please try again, or email Doug directly at doug.moisuk@gmail.com.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">Get in touch</span>
          <h2>Tell Doug what you need done.</h2>
          <p>
            Send a quick note with the job and where you&apos;re located. Doug
            will get back to you with a fair quote and a time that works.
          </p>
          <ul className="contact-list">
            <li>
              <span className="contact-label">Email</span>
              <a href="mailto:doug.moisuk@gmail.com">doug.moisuk@gmail.com</a>
            </li>
            <li>
              <span className="contact-label">Hours</span>
              Mon–Sat, 7am–6pm
            </li>
            <li>
              <span className="contact-label">Area</span>
              Calgary, AB, Canada
            </li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="service">What do you need?</label>
            <select
              id="service"
              name="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">Details</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell Doug about the job..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Request a Quote"}
          </button>
          {note && (
            <p className="form-note" role="status" aria-live="polite">
              {note}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
