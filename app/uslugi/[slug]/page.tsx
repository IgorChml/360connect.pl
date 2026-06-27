import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import CtaBanner from "@/components/sections/CtaBanner";
import { services, getService } from "@/lib/services";
import { serviceSchema, faqSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Usługa nie znaleziona" };
  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    alternates: { canonical: `/uslugi/${service.slug}` },
    openGraph: {
      title: `${service.title} | 360 Connect`,
      description: service.description,
      url: `/uslugi/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.name,
            description: service.description,
            slug: service.slug,
          }),
          faqSchema(service.faq),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Usługi", path: "/uslugi" },
          { name: service.shortName, path: `/uslugi/${service.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="ambient-glow" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <SectionLabel>{service.shortName}</SectionLabel>
          <h1 className="text-h2 text-text-primary mt-4 mb-6">{service.heading}</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
            {service.intro}
          </p>
          <Link href="/kontakt">
            <Button variant="primary" size="lg">
              Bezpłatny audyt
            </Button>
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--bg-surface)" }}>
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-h2 text-text-primary">Dlaczego warto</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.benefits.map((b, i) => (
              <GlassCard key={i} className="p-6 h-full">
                <h3
                  className="text-lg font-semibold text-text-primary mb-2"
                  style={{ fontFamily: "var(--font-tight)" }}
                >
                  {b.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{b.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-h2 text-text-primary">Co wchodzi w zakres</h2>
          </div>
          <GlassCard className="p-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.deliverables.map((d, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                  <Check size={18} className="text-success shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* FAQ — rendered statically for full crawlability */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--bg-surface)" }}>
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-h2 text-text-primary">Najczęstsze pytania</h2>
          </div>
          <div className="space-y-4">
            {service.faq.map((item, i) => (
              <GlassCard key={i} className="p-6">
                <h3 className="text-base font-medium text-text-primary mb-2">{item.q}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.a}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
