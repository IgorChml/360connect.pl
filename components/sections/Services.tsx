"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Icon from "@/components/ui/Icon";
import type { BrandIconName } from "@/lib/brandIcons";

const services: {
  num: string;
  slug: string;
  icon: BrandIconName;
  title: string;
  desc: string;
  bullets: string[];
}[] = [
  {
    num: "01",
    slug: "seo",
    icon: "seo",
    title: "SEO",
    desc: "Pozycjonowanie, które buduje trwały ruch organiczny i widoczność w Google.",
    bullets: [
      "Audyt techniczny i on-page",
      "Strategia content marketingowa",
      "Link building wysokiej jakości",
      "Raportowanie i optymalizacja",
    ],
  },
  {
    num: "02",
    slug: "google-ads",
    icon: "target",
    title: "Google Ads",
    desc: "Kampanie w wyszukiwarce i sieci reklamowej z precyzyjnym targetowaniem.",
    bullets: [
      "Kampanie Search i Shopping",
      "Remarketing dynamiczny",
      "Optymalizacja stawek i budżetu",
      "A/B testy kreacji reklamowych",
    ],
  },
  {
    num: "03",
    slug: "meta-ads",
    icon: "social",
    title: "Meta Ads",
    desc: "Reklamy na Facebooku i Instagramie, które konwertują i skalują sprzedaż.",
    bullets: [
      "Kampanie prospectingowe i retargetingowe",
      "Kreacje graficzne i wideo",
      "Lookalike audiences",
      "Optymalizacja ROAS",
    ],
  },
  {
    num: "04",
    slug: "content-marketing",
    icon: "branding",
    title: "Content Marketing",
    desc: "Treści, które przyciągają, edukują i konwertują Twoich idealnych klientów.",
    bullets: [
      "Strategia treści i content plan",
      "Artykuły blogowe i case studies",
      "Infografiki i materiały premium",
      "Dystrybucja i promocja treści",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "var(--bg-surface)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <SectionLabel>Co robimy</SectionLabel>
          <h2 className="text-h2 text-text-primary mt-4">Nasze usługi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="lg p-8 relative"
              style={{ borderLeft: "3px solid var(--signal)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-caption text-signal absolute top-6 right-6">
                {s.num}
              </span>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-signal-subtle">
                <Icon name={s.icon} size={26} className="text-text-primary" />
              </div>
              <h3 className="text-h3 text-text-primary mb-3">{s.title}</h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                {s.desc}
              </p>
              <ul className="space-y-2 mb-6">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href={`/uslugi/${s.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-signal hover:gap-3 transition-all"
              >
                Dowiedz się więcej
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/uslugi"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-signal transition-colors"
          >
            Zobacz wszystkie usługi
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
