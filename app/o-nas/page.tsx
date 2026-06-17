"use client";

import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, Handshake } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaBanner from "@/components/sections/CtaBanner";

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

const values = [
  { icon: Target, title: "Orientacja na wynik", desc: "Każda decyzja oparta jest na danych i mierzalnych KPI." },
  { icon: Heart, title: "Pasja do marketingu", desc: "Kochamy to, co robimy — i widać to w wynikach naszych klientów." },
  { icon: Lightbulb, title: "Innowacyjność", desc: "Stale testujemy nowe narzędzia, technologie i strategie." },
  { icon: Handshake, title: "Partnerstwo", desc: "Traktujemy klientów jak partnerów — ich sukces jest naszym sukcesem." },
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
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold text-white mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }}
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
              style={{ background: "linear-gradient(180deg, var(--accent-primary), var(--accent-secondary))" }}
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
                <div className="absolute -left-8 top-0 w-6 h-6 rounded-full flex items-center justify-center bg-bg-base border border-accent-primary">
                  <span className="w-2 h-2 rounded-full bg-accent-primary" />
                </div>
                <GlassCard className="p-6">
                  <span className="text-caption text-accent-primary">{item.year}</span>
                  <h3 className="text-lg font-semibold text-text-primary mt-1 mb-2" style={{ fontFamily: "var(--font-display)" }}>
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
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 mx-auto bg-accent-primary/10">
                    <v.icon size={20} className="text-accent-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>
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
                  <p className="text-2xl font-bold text-accent-primary" style={{ fontFamily: "var(--font-display)" }}>
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
