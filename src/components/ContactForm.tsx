"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendMessage, type ContactState } from "@/app/actions/contact";
import { cn } from "@/lib/cn";

const initialState: ContactState = { ok: false, message: "" };

const fieldClassName =
  "w-full border-b border-line bg-transparent py-3 text-base outline-none transition-colors placeholder:text-muted focus:border-accent";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(sendMessage, initialState);

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="max-w-md space-y-6">
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

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-3 text-base text-muted transition-colors hover:text-accent disabled:opacity-50"
      >
        <span className="block h-px w-8 bg-accent" />
        {pending ? "Sending" : "Let's Talk"}
      </button>

      <p
        aria-live="polite"
        className={cn(
          "min-h-5 text-base",
          state.ok ? "text-accent" : "text-muted",
        )}
      >
        {state.message}
      </p>
    </form>
  );
}
