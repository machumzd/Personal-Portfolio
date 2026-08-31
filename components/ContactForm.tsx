"use client";

import { useState } from "react";

/**
 * Posts to a Google Apps Script web app.
 *
 * Apps Script only populates `e.parameters` for application/x-www-form-urlencoded,
 * so the body is URLSearchParams rather than FormData. That is also a "simple"
 * request, so the browser sends it without a CORS preflight (Apps Script cannot
 * answer an OPTIONS preflight at all).
 */
const ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ??
  "https://script.google.com/macros/s/AKfycbzK12t42SbgRVxYEjcn4lpssSoFVR579NQrG_chC-6Kfs_ZjABdBhHwAT6_Hk-Z5PHEbg/exec";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "sent" | "unconfirmed" | "error";

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Bots fill hidden fields; people do not.
    if ((data.get("honeypot") as string)?.length) return;

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
      const first = Object.keys(next)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    const body = new URLSearchParams({
      name,
      email,
      message,
      // the Apps Script uses these to order the email body and pick the sheet tab
      formDataNameOrder: JSON.stringify(["name", "email", "message"]),
      formGoogleSheetName: "responses",
    });

    setStatus("sending");

    try {
      const res = await fetch(ENDPOINT, { method: "POST", body });
      // A readable response means we can confirm delivery properly.
      const text = await res.text();
      if (res.ok && text.includes("success")) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      // The response was unreadable (opaque redirect or CORS). Resend in no-cors
      // so the submission still lands, but do not claim confirmed delivery.
      try {
        await fetch(ENDPOINT, { method: "POST", body, mode: "no-cors" });
        setStatus("unconfirmed");
        form.reset();
      } catch {
        setStatus("error");
      }
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

      {/* named to match the Apps Script, which strips this field from the sheet */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-honeypot">Company</label>
        <input
          id="cf-honeypot"
          name="honeypot"
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
          "Thanks - that came through. I'll reply within a day or two."}
        {status === "unconfirmed" &&
          "Sent. If you don't hear back in a couple of days, email me directly."}
        {status === "error" && (
          <>
            That didn&rsquo;t send. Please email{" "}
            <a href="mailto:machumzdofcl@gmail.com">machumzdofcl@gmail.com</a>{" "}
            instead.
          </>
        )}
      </p>
    </form>
  );
}
