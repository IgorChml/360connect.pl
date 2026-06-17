"use client";

import { motion } from "framer-motion";
import { Search, Target, Rocket, BarChart3 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  { icon: Search, title: "Bezpłatny audyt", desc: "Analizujemy Twoją obecność online i identyfikujemy szanse wzrostu." },
  { icon: Target, title: "Strategia i plan", desc: "Przygotowujemy spersonalizowany plan działań z konkretnymi KPI." },
  { icon: Rocket, title: "Wdrożenie i optymalizacja", desc: "Uruchamiamy kampanie i na bieżąco optymalizujemy wyniki." },
  { icon: BarChart3, title: "Raport i skalowanie", desc: "Dostarczamy przejrzyste raporty i skalujemy to, co działa." },
];

export default function HowWeWork() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <SectionLabel>Jak pracujemy</SectionLabel>
          <h2 className="text-h2 text-text-primary mt-4">Proces współpracy</h2>
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden lg:grid grid-cols-4 gap-0 relative">
          <div
            className="absolute top-12 left-[12.5%] right-[12.5%] h-0.5"
            style={{
              background: "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))",
            }}
          />
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col items-center text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-bg-surface border border-accent-primary relative z-10 mb-6">
                <s.icon size={20} className="text-accent-primary" />
              </div>
              <span className="text-caption text-accent-primary mb-2">0{i + 1}</span>
              <h3 className="text-lg font-semibold text-text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>
                {s.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-8 relative pl-8">
          <div
            className="absolute left-3 top-0 bottom-0 w-0.5"
            style={{
              background: "linear-gradient(180deg, var(--accent-primary), var(--accent-secondary))",
            }}
          />
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="absolute -left-8 top-0 w-6 h-6 rounded-full flex items-center justify-center bg-bg-base border border-accent-primary">
                <span className="text-[10px] text-accent-primary font-bold">{i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-1" style={{ fontFamily: "var(--font-display)" }}>
                {s.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
