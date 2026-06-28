"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import type { BrandIconName } from "@/lib/brandIcons";

const trustBadges: { name: BrandIconName; label: string }[] = [
  { name: "report", label: "Pierwszy raport w 14 dni" },
  { name: "time", label: "Bez umowy na rok" },
  { name: "performance", label: "Mierzalne efekty" },
  { name: "security", label: "Zgodność z RODO" },
];

export default function Hero() {
  return (
    <section className="relative -mt-16 min-h-dvh flex items-center overflow-hidden">
      <div className="hero-gradient" />
      <div className="ambient-glow" />

      {/* płynne wtopienie dolnej krawędzi w tło kolejnej sekcji */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48"
        style={{ background: "linear-gradient(to bottom, transparent 0%, var(--bg-base) 100%)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Lewa kolumna: treść ── */}
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-hero text-text-primary mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Marketing 360°, który widać w przychodzie.
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              SEO, Google Ads, Meta Ads, content. Pojedyncze usługi lub pełny
              pakiet. Pierwszy raport w 14 dni — bez umowy na rok.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/kontakt">
                <Button variant="primary" size="lg">
                  Umów bezpłatny audyt
                </Button>
              </Link>
              <Link href="/cennik">
                <Button variant="ghost" size="lg">
                  Zobacz cennik →
                </Button>
              </Link>
            </motion.div>

            {/* ── Pasek zaufania: ikony marki + konkrety biznesowe ── */}
            <motion.ul
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
              }}
            >
              {trustBadges.map(({ name, label }) => (
                <motion.li
                  key={label}
                  className="trust-chip inline-flex items-center gap-2 rounded-full border border-border-default bg-white/[0.03] px-3.5 py-1.5 text-sm text-text-secondary backdrop-blur-sm"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Icon name={name} size={17} />
                  {label}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* ── Prawa kolumna: animacja logo ── */}
          <motion.div
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          >
            <div
              className="relative overflow-hidden rounded-[var(--lg-radius-lg)] border"
              style={{
                borderColor: "var(--lg-border-signal)",
                boxShadow: "var(--lg-shadow-signal)",
              }}
            >
              <video
                className="block h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Animowane logo 360 Connect"
              >
                <source src="/hero-animation.mp4" type="video/mp4" />
              </video>
            </div>
            {/* poświata pod panelem */}
            <div
              className="absolute -inset-4 -z-10 blur-2xl"
              style={{ background: "var(--signal-glow)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
