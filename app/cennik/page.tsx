"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ChevronDown } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";
import { cennikFaq as faqItems } from "@/lib/cennikFaq";

const plans = [
  {
    name: "Starter",
    price: "od 1 500 zł",
    period: "/mies.",
    highlighted: false,
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
    highlighted: true,
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
    highlighted: false,
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

const comparisonFeatures = [
  { name: "Kanały reklamowe", starter: "1", growth: "Do 3", enterprise: "Wszystkie" },
  { name: "Audyt", starter: true, growth: true, enterprise: true },
  { name: "Raportowanie", starter: "Miesięczne", growth: "Co 2 tyg.", enterprise: "Real-time" },
  { name: "A/B testy", starter: false, growth: true, enterprise: true },
  { name: "Content marketing", starter: false, growth: true, enterprise: true },
  { name: "Dedykowany opiekun", starter: true, growth: true, enterprise: true },
  { name: "Dedykowany zespół", starter: false, growth: false, enterprise: true },
  { name: "Priorytetowe wsparcie", starter: false, growth: true, enterprise: true },
  { name: "SLA", starter: false, growth: false, enterprise: true },
  { name: "Warsztaty i szkolenia", starter: false, growth: false, enterprise: true },
  { name: "Custom integracje", starter: false, growth: false, enterprise: true },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <GlassCard variant="flat" className="overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-text-primary pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`text-text-muted shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 pt-0">
          <p className="text-sm text-text-secondary leading-relaxed">{a}</p>
        </div>
      )}
    </GlassCard>
  );
}

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? <Check size={16} className="text-success mx-auto" /> : <X size={16} className="text-text-muted mx-auto" />;
  }
  return <span className="text-sm text-text-secondary">{value}</span>;
}

export default function CennikPage() {
  return (
    <>
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <SectionLabel>Cennik</SectionLabel>
            <h1 className="text-h2 text-text-primary mt-4">
              Przejrzyste ceny, mierzalne efekty
            </h1>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              Wybierz plan dopasowany do Twoich potrzeb. Każdy zawiera dedykowanego opiekuna i przejrzyste raportowanie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                className={`lg ${plan.highlighted ? "lg--signal" : ""} p-8 flex flex-col relative`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {plan.highlighted && (
                  <Badge variant="signal" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Najpopularniejszy
                  </Badge>
                )}
                <h3 className="text-h3 text-text-primary mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-text-primary" style={{ fontFamily: "var(--font-tight)" }}>
                    {plan.price}
                  </span>
                  {plan.period && <span className="text-text-secondary text-sm">{plan.period}</span>}
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
                  <Button variant={plan.highlighted ? "primary" : "outline"} className="w-full">
                    Wybierz plan
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Tabela porównawcza — desktop */}
          <div className="hidden md:block mb-24">
            <h2 className="text-h3 text-text-primary text-center mb-8">Porównanie planów</h2>
            <GlassCard className="overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border-subtle">
                    <th className="text-left p-4 text-sm text-text-muted">Funkcja</th>
                    <th className="text-center p-4 text-sm text-text-primary font-medium">Starter</th>
                    <th className="text-center p-4 text-sm text-signal font-medium">Growth</th>
                    <th className="text-center p-4 text-sm text-text-primary font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((f, i) => (
                    <tr key={i} className="border-b border-border-subtle last:border-0">
                      <td className="p-4 text-sm text-text-secondary">{f.name}</td>
                      <td className="p-4 text-center"><CellValue value={f.starter} /></td>
                      <td className="p-4 text-center" style={{ background: "rgba(14,165,255,0.03)" }}><CellValue value={f.growth} /></td>
                      <td className="p-4 text-center"><CellValue value={f.enterprise} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>
          </div>

          {/* Tabela — mobile accordion */}
          <div className="md:hidden mb-24 space-y-4">
            <h2 className="text-h3 text-text-primary text-center mb-8">Porównanie planów</h2>
            {comparisonFeatures.map((f, i) => (
              <GlassCard key={i} className="p-4">
                <p className="text-sm font-medium text-text-primary mb-3">{f.name}</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-xs text-text-muted mb-1">Starter</p>
                    <CellValue value={f.starter} />
                  </div>
                  <div>
                    <p className="text-xs text-signal mb-1">Growth</p>
                    <CellValue value={f.growth} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted mb-1">Enterprise</p>
                    <CellValue value={f.enterprise} />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mb-24">
            <h2 className="text-h3 text-text-primary text-center mb-8">Najczęściej zadawane pytania</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>

          <div className="text-center">
            <GlassCard variant="signal" className="p-12 inline-block mx-auto max-w-xl">
              <h3 className="text-h3 text-text-primary mb-3">
                Nie wiesz który plan wybrać?
              </h3>
              <p className="text-text-secondary mb-6">
                Napisz do nas — pomożemy dobrać najlepsze rozwiązanie.
              </p>
              <Link href="/kontakt">
                <Button variant="primary">Skontaktuj się</Button>
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
}
