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

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [note, setNote] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setNote(
      `Thanks, ${name || "friend"}! Your message is ready to send — Doug will be in touch soon.`
    );
    setName("");
    setEmail("");
    setPhone("");
    setService(SERVICE_OPTIONS[0]);
    setMessage("");
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
              <span className="contact-label">Phone</span>
              <a href="tel:+15555550123">(555) 555-0123</a>
            </li>
            <li>
              <span className="contact-label">Email</span>
              <a href="mailto:doug@dougprohandyman.com">doug@dougprohandyman.com</a>
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
            <label htmlFor="phone">
              Phone <span className="optional">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
          <button type="submit" className="btn btn-primary btn-block">
            Request a Quote
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
