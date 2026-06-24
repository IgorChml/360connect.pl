import { notFound } from "next/navigation";
import { getCaseStudyBySlug } from "@/lib/contentful";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/siteConfig";
import type { Metadata } from "next";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study nie znalezione" };
  return {
    title: `${study.title} — Case Study`,
    description: `Case study: ${study.client} — ${study.industry}. Zobacz mierzalne wyniki współpracy z 360 Connect.`,
    alternates: { canonical: `/case-study/${study.slug}` },
    openGraph: {
      title: study.title,
      type: "article",
      url: `/case-study/${study.slug}`,
      ...(study.coverImage.url && { images: [study.coverImage.url] }),
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) notFound();

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: `Case study: ${study.client} — ${study.industry}`,
    url: `${siteConfig.url}/case-study/${study.slug}`,
    mainEntityOfPage: `${siteConfig.url}/case-study/${study.slug}`,
    inLanguage: "pl-PL",
    ...(study.coverImage.url && { image: study.coverImage.url }),
    ...(study.publishedDate && { datePublished: study.publishedDate }),
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/icon.png` },
    },
  };

  return (
    <>
      <JsonLd data={caseStudySchema} />
      <Breadcrumbs
        items={[
          { name: "Case Study", path: "/case-study" },
          { name: study.title, path: `/case-study/${study.slug}` },
        ]}
      />
      <section className="relative">
        <div
          className="h-64 sm:h-80 w-full bg-cover bg-center relative"
          style={{
            backgroundImage: study.coverImage.url
              ? `url(${study.coverImage.url})`
              : undefined,
            background: study.coverImage.url
              ? undefined
              : "linear-gradient(135deg, var(--bg-elevated), var(--bg-surface))",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, transparent, var(--bg-base))",
            }}
          />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-h2 text-text-primary mb-2">{study.title}</h1>
              <p className="text-text-muted mb-8">
                {study.client} &middot; {study.industry}
              </p>

              <div className="space-y-12">
                <div>
                  <h2 className="text-h3 text-text-primary mb-4">Wyzwanie</h2>
                  <div className="text-text-secondary leading-relaxed">
                    <p>Szczegóły dostępne po skonfigurowaniu Contentful CMS.</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-h3 text-text-primary mb-4">Rozwiązanie</h2>
                  <div className="text-text-secondary leading-relaxed">
                    <p>Szczegóły dostępne po skonfigurowaniu Contentful CMS.</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-h3 text-text-primary mb-4">Wyniki</h2>
                  <div className="text-text-secondary leading-relaxed">
                    <p>Szczegóły dostępne po skonfigurowaniu Contentful CMS.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <GlassCard variant="signal" className="p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-text-primary mb-4" style={{ fontFamily: "var(--font-tight)" }}>
                  Kluczowe metryki
                </h3>
                <div className="space-y-4">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-2xl font-bold text-signal" style={{ fontFamily: "var(--font-tight)" }}>
                        {value}
                      </p>
                      <p className="text-xs text-text-muted">{key}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>

          <GlassCard className="p-12 mt-16 text-center">
            <h3 className="text-h3 text-text-primary mb-3">Chcesz podobnych wyników?</h3>
            <p className="text-text-secondary mb-6">Umów się na bezpłatną konsultację.</p>
            <Link href="/kontakt">
              <Button variant="primary">Skontaktuj się</Button>
            </Link>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
