// Email content builders for the contact form. User-supplied values are
// escaped before being interpolated into HTML to prevent HTML/email injection.

import { siteConfig } from "@/lib/siteConfig";
import { getBudgetLabel } from "@/lib/contact";
import type { ContactFormData } from "@/lib/validations";

/** Escapes the five characters that are significant in HTML. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Converts newlines in escaped text into <br /> for HTML rendering. */
function nl2br(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

type Built = { subject: string; html: string; text: string };

/** Internal notification sent to the agency inbox for every submission. */
export function buildTeamNotification(data: ContactFormData): Built {
  const { name, email, phone, company, budget, message } = data;
  const budgetLabel = getBudgetLabel(budget);
  const phoneLabel = phone?.trim() ? phone : "—";

  const subject = `Nowe zapytanie od ${name} — ${company}`;

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#0f172a;">
      <h2 style="font-size:18px;margin:0 0 16px;">Nowe zapytanie z formularza kontaktowego</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        <tr><td style="padding:6px 0;color:#64748b;width:160px;">Imię i nazwisko</td><td style="padding:6px 0;"><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding:6px 0;color:#64748b;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#64748b;">Telefon</td><td style="padding:6px 0;">${escapeHtml(phoneLabel)}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;">Firma</td><td style="padding:6px 0;">${escapeHtml(company)}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;">Budżet miesięczny</td><td style="padding:6px 0;">${escapeHtml(budgetLabel)}</td></tr>
      </table>
      <h3 style="font-size:14px;margin:20px 0 6px;color:#64748b;">Opis projektu</h3>
      <p style="font-size:14px;line-height:1.6;margin:0;white-space:pre-wrap;">${nl2br(message)}</p>
    </div>
  `;

  const text = [
    "Nowe zapytanie z formularza kontaktowego",
    "",
    `Imię i nazwisko: ${name}`,
    `Email: ${email}`,
    `Telefon: ${phoneLabel}`,
    `Firma: ${company}`,
    `Budżet miesięczny: ${budgetLabel}`,
    "",
    "Opis projektu:",
    message,
  ].join("\n");

  return { subject, html, text };
}

/** Auto-reply confirmation sent to the person who submitted the form. */
export function buildAutoReply(data: ContactFormData): Built {
  const { name } = data;
  const subject = "Dziękujemy za kontakt — 360 Connect";

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#0f172a;">
      <h2 style="font-size:18px;margin:0 0 16px;">Dziękujemy za wiadomość!</h2>
      <p style="font-size:14px;line-height:1.6;">Cześć ${escapeHtml(name)},</p>
      <p style="font-size:14px;line-height:1.6;">
        Otrzymaliśmy Twoje zapytanie i odezwiemy się w ciągu 24 godzin (w dni robocze).
        Jeśli sprawa jest pilna, zadzwoń do nas: <a href="tel:${escapeHtml(siteConfig.phone.replace(/\s+/g, ""))}">${escapeHtml(siteConfig.phone)}</a>.
      </p>
      <p style="font-size:14px;line-height:1.6;">Pozdrawiamy,<br />Zespół ${escapeHtml(siteConfig.name)}</p>
    </div>
  `;

  const text = [
    "Dziękujemy za wiadomość!",
    "",
    `Cześć ${name},`,
    "",
    "Otrzymaliśmy Twoje zapytanie i odezwiemy się w ciągu 24 godzin (w dni robocze).",
    `Jeśli sprawa jest pilna, zadzwoń do nas: ${siteConfig.phone}.`,
    "",
    `Pozdrawiamy,`,
    `Zespół ${siteConfig.name}`,
  ].join("\n");

  return { subject, html, text };
}
