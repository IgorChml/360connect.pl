"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="ambient-glow" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse at center, var(--signal-glow), transparent 70%)",
        }}
      />
      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center lg lg--signal lg--shimmer p-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-h2 text-text-primary mb-4">
          Gotowy na marketing, który przynosi wyniki?
        </h2>
        <p className="text-lg text-text-secondary mb-8">
          Umów bezpłatną 30-minutową konsultację.
        </p>
        <Link href="/kontakt">
          <Button variant="primary" size="lg">
            Skontaktuj się
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
