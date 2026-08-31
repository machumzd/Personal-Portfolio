"use client";

import { useState } from "react";

/**
 * Posts to the existing Google Apps Script webhook that the previous site used.
 * Override with NEXT_PUBLIC_CONTACT_ENDPOINT at build time to point elsewhere.
 */
const ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ??
  "https://script.google.com/macros/s/AKfycbzK12t42SbgRVxYEjcn4lpssSoFVR579NQrG_chC-6Kfs_ZjABdBhHwAT6_Hk-Z5PHEbg/exec";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Bots fill hidden fields; people do not.
    if ((data.get("company") as string)?.length) return;

    const name = (data.get("name") as string)?.trim() ?? "";
    const email = (data.get("email") as string)?.trim() ?? "";
    const message = (data.get("message") as string)?.trim() ?? "";

    const next: Errors = {};
    if (!name) next.name = "Enter your name.";
    if (!email) next.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = "That email address does not look right.";
    if (!message) next.message = "Tell me what you are working on.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstField = Object.keys(next)[0];
      form.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      await fetch(ENDPOINT, { method: "POST", body: data, mode: "no-cors" });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "cf-name-error" : undefined}
        />
        {errors.name && (
          <p className="field__error" id="cf-name-error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "cf-email-error" : undefined}
        />
        {errors.email && (
          <p className="field__error" id="cf-email-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
        />
        {errors.message && (
          <p className="field__error" id="cf-message-error">
            {errors.message}
          </p>
        )}
      </div>

      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-company">Company</label>
        <input
          id="cf-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <button
          type="submit"
          className="btn btn--mint"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending" : "Send message"}
        </button>
      </div>

      <p className="form__status" role="status" aria-live="polite">
        {status === "sent" &&
          "Thanks - your message is through. I will reply within a day or two."}
        {status === "error" &&
          "That did not send. Email me directly and it will reach me."}
      </p>
    </form>
  );
}
