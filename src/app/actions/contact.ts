"use server";

import { Resend } from "resend";
import { profile } from "@/content/profile";

export type ContactState = {
  ok: boolean;
  message: string;
  mailto?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildMailto(name: string, email: string, message: string) {
  const subject = `Portfolio message from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function sendMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const website = readString(formData, "website");
  if (website) {
    return { ok: true, message: "Thanks — I’ll get back to you soon." };
  }

  const name = readString(formData, "name");
  const email = readString(formData, "email");
  const message = readString(formData, "message");

  if (!name || name.length > 100) {
    return { ok: false, message: "Please add your name." };
  }

  if (!email || !emailPattern.test(email) || email.length > 200) {
    return { ok: false, message: "Please add a valid email." };
  }

  if (!message || message.length < 8 || message.length > 4000) {
    return { ok: false, message: "Please write a short message." };
  }

  const mailto = buildMailto(name, email, message);
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      ok: true,
      mailto,
      message: "Opening your email app to send this.",
    };
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  const { error } = await resend.emails.send({
    from,
    to: profile.email,
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    text: [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
    html: `
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p>${safeMessage}</p>
    `,
  });

  if (error) {
    return {
      ok: true,
      mailto,
      message: "Opening your email app to send this.",
    };
  }

  return { ok: true, message: "Thanks — I’ll get back to you soon." };
}
