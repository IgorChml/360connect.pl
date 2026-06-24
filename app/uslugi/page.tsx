import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CtaBanner from "@/components/sections/CtaBanner";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Usługi Marketingowe — SEO, Google Ads, Meta Ads",
  description:
    "Kompleksowe usługi performance marketingu: pozycjonowanie (SEO), kampanie Google Ads, reklama Meta Ads i content marketing. Pojedyncze usługi lub pełny pakiet 360°.",
  alternates: { canonical: "/uslugi" },
  openGraph: {
    title: "Usługi Marketingowe — SEO, Google Ads, Meta Ads | 360 Connect",
    description:
      "Pozycjonowanie, Google Ads, Meta Ads i content marketing. Pojedyncze usługi lub pełny pakiet 360°.",
    url: "/uslugi",
  },
};

export default function UslugiPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Usługi", path: "/uslugi" }]} />
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="ambient-glow" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <SectionLabel>Usługi</SectionLabel>
          <h1 className="text-h2 text-text-primary mt-4 mb-6">
            Performance marketing 360° — od strategii po wyniki
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Wybierz pojedynczą usługę lub połącz kanały w spójną strategię.
            Każde działanie opieramy o dane i mierzalne KPI.
          </p>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link key={service.slug} href={`/uslugi/${service.slug}`} className="group">
              <GlassCard
                className="p-8 h-full"
                style={{ borderLeft: "3px solid var(--signal)" }}
              >
                <h2 className="text-h3 text-text-primary mb-3 group-hover:text-signal transition-colors">
                  {service.name}
                </h2>
                <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                  {service.intro}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-signal">
                  Dowiedz się więcej
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
