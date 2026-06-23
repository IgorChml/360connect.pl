"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden">
      <div className="hero-gradient" />
      <div className="ambient-glow" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
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

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="text-text-muted" size={28} />
      </motion.div>
    </section>
  );
}
