"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Icon from "@/components/ui/Icon";
import type { BrandIconName } from "@/lib/brandIcons";

const steps: { icon: BrandIconName; title: string; desc: string }[] = [
  { icon: "analytics", title: "Bezpłatny audyt", desc: "Analizujemy Twoją obecność online i identyfikujemy szanse wzrostu." },
  { icon: "strategy", title: "Strategia i plan", desc: "Przygotowujemy spersonalizowany plan działań z konkretnymi KPI." },
  { icon: "integrations", title: "Wdrożenie i optymalizacja", desc: "Uruchamiamy kampanie i na bieżąco optymalizujemy wyniki." },
  { icon: "report", title: "Raport i skalowanie", desc: "Dostarczamy przejrzyste raporty i skalujemy to, co działa." },
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
              background: "linear-gradient(90deg, var(--signal), var(--accent-tech))",
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
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-bg-surface border border-signal relative z-10 mb-6">
                <Icon name={s.icon} size={22} className="text-text-primary" />
              </div>
              <span className="text-caption text-signal mb-2">0{i + 1}</span>
              <h3 className="text-lg font-semibold text-text-primary mb-2" style={{ fontFamily: "var(--font-tight)" }}>
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
              background: "linear-gradient(180deg, var(--signal), var(--accent-tech))",
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
              <div className="absolute -left-8 top-0 w-6 h-6 rounded-full flex items-center justify-center bg-bg-base border border-signal">
                <span className="text-[10px] text-signal font-bold">{i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-1" style={{ fontFamily: "var(--font-tight)" }}>
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
