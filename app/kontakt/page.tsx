"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle, Mail, Phone, Clock, MapPin } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import SocialIcon from "@/components/ui/SocialIcon";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { siteConfig } from "@/lib/siteConfig";

const socialLinks = [
  { key: "linkedin", label: "LinkedIn", href: siteConfig.social.linkedin },
  { key: "facebook", label: "Facebook", href: siteConfig.social.facebook },
  { key: "instagram", label: "Instagram", href: siteConfig.social.instagram },
].filter((s) => Boolean(s.href));

const budgetOptions = [
  { value: "", label: "Wybierz budżet (opcjonalnie)" },
  { value: "<1k", label: "do 1 000 zł" },
  { value: "1-3k", label: "1 000 – 3 000 zł" },
  { value: "3-10k", label: "3 000 – 10 000 zł" },
  { value: "10k+", label: "powyżej 10 000 zł" },
];

function Input({
  label,
  error,
  name,
  ...props
}: {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-text-secondary mb-1.5">{label}</label>
      <input
        id={id}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="w-full min-h-[44px] px-4 py-3 rounded-xl text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-signal"
        style={{
          background: "var(--bg-elevated)",
          border: `1px solid ${error ? "var(--error)" : "var(--border-default)"}`,
        }}
        {...props}
      />
      {error && (
        <p id={errorId} role="alert" className="text-xs mt-1" style={{ color: "var(--error)" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setServerError(json.message);
      }
    } catch {
      setServerError("Wystąpił błąd. Spróbuj ponownie.");
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-h2 text-text-primary">Skontaktuj się z nami</h1>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Opisz swój projekt, a my przygotujemy bezpłatną wycenę i propozycję działań.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard variant="raised" className="p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-success mb-4" />
                  <h3 className="text-h3 text-text-primary mb-2">Wiadomość wysłana!</h3>
                  <p className="text-text-secondary">Odezwiemy się w ciągu 24 godzin.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <Input label="Imię i nazwisko *" autoComplete="name" placeholder="Jan Kowalski" {...register("name")} error={errors.name?.message} />
                  <Input label="Email *" type="email" inputMode="email" autoComplete="email" placeholder="jan@firma.pl" {...register("email")} error={errors.email?.message} />
                  <Input label="Numer telefonu" type="tel" inputMode="tel" autoComplete="tel" placeholder="+48 123 456 789" {...register("phone")} error={errors.phone?.message} />
                  <Input label="Firma *" autoComplete="organization" placeholder="Nazwa firmy" {...register("company")} error={errors.company?.message} />

                  <div>
                    <label htmlFor="field-budget" className="block text-sm text-text-secondary mb-1.5">Budżet miesięczny</label>
                    <select
                      id="field-budget"
                      aria-invalid={errors.budget ? true : undefined}
                      aria-describedby={errors.budget ? "field-budget-error" : undefined}
                      className="w-full min-h-[44px] px-4 py-3 rounded-xl text-sm text-text-primary outline-none transition-colors focus:border-signal"
                      style={{ background: "var(--bg-elevated)", border: `1px solid ${errors.budget ? "var(--error)" : "var(--border-default)"}` }}
                      {...register("budget")}
                    >
                      {budgetOptions.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    {errors.budget && <p id="field-budget-error" role="alert" className="text-xs mt-1" style={{ color: "var(--error)" }}>{errors.budget.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="field-message" className="block text-sm text-text-secondary mb-1.5">Opis projektu *</label>
                    <textarea
                      id="field-message"
                      aria-invalid={errors.message ? true : undefined}
                      aria-describedby={errors.message ? "field-message-error" : undefined}
                      className="w-full px-4 py-3 rounded-xl text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-signal resize-y min-h-[120px]"
                      style={{ background: "var(--bg-elevated)", border: `1px solid ${errors.message ? "var(--error)" : "var(--border-default)"}` }}
                      placeholder="Opisz swój projekt i cele..."
                      {...register("message")}
                    />
                    {errors.message && <p id="field-message-error" role="alert" className="text-xs mt-1" style={{ color: "var(--error)" }}>{errors.message.message}</p>}
                  </div>

                  {serverError && (
                    <p role="alert" className="text-sm p-3 rounded-lg" style={{ background: "rgba(239,68,68,0.1)", color: "var(--error)" }}>
                      {serverError}
                    </p>
                  )}

                  <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting} aria-busy={isSubmitting}>
                    {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4" style={{ fontFamily: "var(--font-tight)" }}>
                Dane kontaktowe
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-text-secondary">
                  <Mail size={18} className="text-signal shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-signal transition-colors">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-text-secondary">
                  <Phone size={18} className="text-signal shrink-0" />
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-signal transition-colors">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-text-secondary">
                  <MapPin size={18} className="text-signal shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.address.locality}, Polska
                    <br />
                    <span className="text-text-muted">NIP: {siteConfig.taxId}</span>
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm text-text-secondary">
                  <Clock size={18} className="text-signal shrink-0" />
                  Pon–Pt: 9:00–17:00
                </li>
              </ul>
            </GlassCard>

            {socialLinks.length > 0 && (
              <GlassCard className="p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4" style={{ fontFamily: "var(--font-tight)" }}>
                  Social media
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map(({ key, label, href }) => (
                    <a
                      key={key}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-signal transition-colors flex items-center gap-1 text-sm"
                    >
                      <SocialIcon name={key} size={16} /> {label}
                    </a>
                  ))}
                </div>
              </GlassCard>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
