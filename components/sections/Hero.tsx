"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0" style={{
        background: `
          radial-gradient(ellipse 80% 70% at 70% 50%, rgba(255, 79, 31, 0.14) 0%, transparent 60%),
          radial-gradient(ellipse 50% 60% at 20% 80%, rgba(14, 165, 255, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse 40% 40% at 90% 20%, rgba(255, 79, 31, 0.06) 0%, transparent 50%),
          linear-gradient(180deg, var(--bg-base) 0%, var(--bg-surface) 100%)
        `,
      }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.h1
              className="text-hero text-text-primary mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Marketing 360°, który widać w przychodzie.
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-text-secondary max-w-xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              SEO, Google Ads, Meta Ads, content. Pojedyncze usługi lub pełny pakiet.
              Pierwszy raport w 14 dni — bez umowy na rok.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4"
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

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden" style={{
              boxShadow: "0 20px 60px rgba(255, 79, 31, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.06)",
            }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/hero-animation.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="text-text-muted" size={28} />
      </motion.div>
    </section>
  );
}
