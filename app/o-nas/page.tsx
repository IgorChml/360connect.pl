"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaBanner from "@/components/sections/CtaBanner";
import Icon from "@/components/ui/Icon";
import type { BrandIconName } from "@/lib/brandIcons";

const team = [
  { initials: "IK", name: "Igor Chmiel", role: "CEO & Founder" },
  { initials: "AW", name: "Anna Wiśniewska", role: "Head of SEO" },
  { initials: "MN", name: "Michał Nowak", role: "Performance Manager" },
  { initials: "KZ", name: "Karolina Zielińska", role: "Content Strategist" },
];

const timeline = [
  { year: "2020", title: "Założenie agencji", desc: "Start z 2-osobowym zespołem i wizją marketingu opartego na danych." },
  { year: "2021", title: "Pierwsze 50 klientów", desc: "Szybki rozwój dzięki mierzalnym wynikom i rekomendacjom." },
  { year: "2023", title: "Rozbudowa zespołu", desc: "Zespół rośnie do 15 specjalistów, nowe kompetencje w AI i automatyzacji." },
  { year: "2025", title: "Ekspansja międzynarodowa", desc: "Obsługa klientów na rynkach DACH, UK i Skandynawii." },
  { year: "2026", title: "120+ projektów", desc: "Ponad 120 zrealizowanych projektów i status Google Premier Partner." },
];

const values: { icon: BrandIconName; title: string; desc: string }[] = [
  { icon: "data", title: "Orientacja na wynik", desc: "Każda decyzja oparta jest na danych i mierzalnych KPI." },
  { icon: "idea", title: "Pasja do marketingu", desc: "Kochamy to, co robimy — i widać to w wynikach naszych klientów." },
  { icon: "workflow", title: "Innowacyjność", desc: "Stale testujemy nowe narzędzia, technologie i strategie." },
  { icon: "partnership", title: "Partnerstwo", desc: "Traktujemy klientów jak partnerów — ich sukces jest naszym sukcesem." },
];

export default function ONasPage() {
  return (
    <>
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="ambient-glow" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.h1
            className="text-h2 text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Agencja performance marketingu, która stawia na wyniki
          </motion.h1>
          <motion.p
            className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Jesteśmy zespołem strategów, analityków i kreatywnych umysłów. Łączymy dane z kreatywnością,
            żeby Twój marketing nie tylko wyglądał dobrze, ale przede wszystkim — przynosił przychód.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "var(--bg-surface)" }}>
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <SectionLabel>Zespół</SectionLabel>
            <h2 className="text-h2 text-text-primary mt-4">Kim jesteśmy</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold text-white mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, var(--signal), var(--accent-tech))" }}
                >
                  {member.initials}
                </div>
                <p className="text-sm font-medium text-text-primary">{member.name}</p>
                <p className="text-xs text-text-muted mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <SectionLabel>Historia</SectionLabel>
            <h2 className="text-h2 text-text-primary mt-4">Nasza droga</h2>
          </div>
          <div className="relative pl-8">
            <div
              className="absolute left-3 top-0 bottom-0 w-0.5"
              style={{ background: "linear-gradient(180deg, var(--signal), var(--accent-tech))" }}
            />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="relative mb-12 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute -left-8 top-0 w-6 h-6 rounded-full flex items-center justify-center bg-bg-base border border-signal">
                  <span className="w-2 h-2 rounded-full bg-signal" />
                </div>
                <GlassCard className="p-6">
                  <span className="text-caption text-signal">{item.year}</span>
                  <h3 className="text-lg font-semibold text-text-primary mt-1 mb-2" style={{ fontFamily: "var(--font-tight)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "var(--bg-surface)" }}>
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <SectionLabel>Wartości</SectionLabel>
            <h2 className="text-h2 text-text-primary mt-4">Co nas napędza</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="p-6 text-center h-full">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 mx-auto bg-signal/10">
                    <Icon name={v.icon} size={24} className="text-text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2" style={{ fontFamily: "var(--font-tight)" }}>
                    {v.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{v.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Zasięg</SectionLabel>
          <h2 className="text-h2 text-text-primary mt-4 mb-8">Działamy globalnie</h2>
          <GlassCard className="p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {["Polska", "DACH", "UK", "Skandynawia"].map((region) => (
                <div key={region}>
                  <p className="text-2xl font-bold text-signal" style={{ fontFamily: "var(--font-tight)" }}>
                    {region}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
