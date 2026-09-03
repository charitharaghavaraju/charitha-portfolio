"use client";

import { useState, type FormEvent } from "react";
import { sendMessage } from "@/app/actions/contact";
import { StarMark } from "@/components/StarMark";
import { profile } from "@/content/profile";
import { cn } from "@/lib/cn";

const fieldClassName =
  "w-full border-b border-line bg-transparent py-3 text-base outline-none transition-colors placeholder:text-muted focus:border-accent";

function readDraft(formData: FormData) {
  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };
}

async function sendFromBrowser(name: string, email: string, message: string) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio message from ${name}`,
          _template: "box",
          _captcha: false,
        }),
        signal: controller.signal,
      },
    );
    const result: unknown = await response.json().catch(() => null);
    const payload =
      result && typeof result === "object"
        ? (result as { success?: boolean | string; message?: string })
        : null;
    const success =
      payload?.success === true || payload?.success === "true";
    const text = typeof payload?.message === "string" ? payload.message : "";

    if (!response.ok || !success) {
      return { ok: false as const, message: text };
    }

    if (/confirm|activat/i.test(text)) {
      return {
        ok: true as const,
        message:
          "Check your inbox to activate the form, then send this once more.",
      };
    }

    return {
      ok: true as const,
      message: "Thanks — I’ll get back to you soon.",
    };
  } catch {
    return { ok: false as const, message: "" };
  } finally {
    clearTimeout(timeout);
  }
}

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState({ ok: false, message: "" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setPending(true);
    setStatus({ ok: false, message: "" });

    try {
      const result = await sendMessage({ ok: false, message: "" }, formData);

      if (!result.ok) {
        setStatus(result);
        return;
      }

      if (!result.mailto) {
        setStatus(result);
        form.reset();
        return;
      }

      const draft = readDraft(formData);
      const delivered = await sendFromBrowser(
        draft.name,
        draft.email,
        draft.message,
      );

      if (delivered.ok) {
        setStatus(delivered);
        form.reset();
        return;
      }

      window.location.href = result.mailto;
      setStatus({
        ok: true,
        message: "Opening your email app to send this.",
      });
      form.reset();
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md space-y-6">
      <label className="sr-only" htmlFor="website">
        Website
      </label>
      <input
        id="website"
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      />

      <div>
        <label
          htmlFor="name"
          className="font-mono text-sm tracking-wide text-accent"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          autoComplete="name"
          placeholder="Your name"
          className={fieldClassName}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-mono text-sm tracking-wide text-accent"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          placeholder="you@email.com"
          className={fieldClassName}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-mono text-sm tracking-wide text-accent"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={8}
          maxLength={4000}
          rows={5}
          placeholder="Say hello"
          className={cn(fieldClassName, "resize-y")}
        />
      </div>

      <button type="submit" disabled={pending} className="talk-button">
        <StarMark className="h-3.5 w-3.5" />
        {pending ? "Sending" : "Let's Talk"}
      </button>

      <p
        aria-live="polite"
        className={cn(
          "min-h-5 text-base",
          status.ok ? "text-accent" : "text-muted",
        )}
      >
        {status.message}
      </p>
    </form>
  );
}
