"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "od 1 500 zł",
    period: "/mies.",
    variant: "default" as const,
    features: [
      "1 kanał reklamowy",
      "Audyt wstępny",
      "Raport miesięczny",
      "Optymalizacja kampanii",
      "Dedykowany opiekun",
    ],
  },
  {
    name: "Growth",
    price: "od 3 500 zł",
    period: "/mies.",
    variant: "signal" as const,
    features: [
      "Do 3 kanałów reklamowych",
      "Audyt rozszerzony",
      "Raporty co 2 tygodnie",
      "A/B testy i optymalizacja",
      "Strategia content marketingowa",
      "Dedykowany opiekun",
      "Priorytetowe wsparcie",
    ],
  },
  {
    name: "Enterprise",
    price: "Wycena indywidualna",
    period: "",
    variant: "tech" as const,
    features: [
      "Wszystkie kanały",
      "Dedykowany zespół",
      "Raportowanie real-time",
      "Strategia omnichannel",
      "Warsztaty i szkolenia",
      "SLA i priorytetowe wsparcie",
      "Custom integracje",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "var(--bg-surface)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <SectionLabel>Cennik</SectionLabel>
          <h2 className="text-h2 text-text-primary mt-4">
            Przejrzyste ceny, mierzalne efekty
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const lgClass =
              plan.variant === "signal"
                ? "lg lg--signal lg--shimmer"
                : plan.variant === "tech"
                  ? "lg lg--tech"
                  : "lg";
            return (
              <motion.div
                key={i}
                className={`${lgClass} p-8 flex flex-col relative`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {plan.variant === "signal" && (
                  <Badge variant="signal" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Najpopularniejszy
                  </Badge>
                )}
                <h3 className="text-h3 text-text-primary mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-text-primary" style={{ fontFamily: "var(--font-tight)" }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-text-secondary text-sm">{plan.period}</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-text-secondary">
                      <Check size={16} className="text-success shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt">
                  <Button
                    variant={plan.variant === "signal" ? "primary" : "outline"}
                    className="w-full"
                  >
                    {plan.name === "Enterprise" ? "Zapytaj o wycenę" : "Wybierz plan"}
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
