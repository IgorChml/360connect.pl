import { getAllCaseStudies } from "@/lib/contentful";
import CaseStudyCard from "@/components/contentful/CaseStudyCard";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study — Wyniki Naszych Klientów",
  description:
    "Zobacz, jak pomagamy firmom osiągać mierzalne wyniki w marketingu cyfrowym. Historie sukcesu, wzrosty ruchu i ROI z kampanii 360 Connect.",
  alternates: { canonical: "/case-study" },
  openGraph: {
    title: "Case Study — Wyniki Naszych Klientów | 360 Connect",
    description:
      "Poznaj historie sukcesu naszych klientów i mierzalne efekty współpracy.",
    url: "/case-study",
  },
};

export const revalidate = 3600;

export default async function CaseStudyPage() {
  const studies = await getAllCaseStudies();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Case Study", path: "/case-study" }]} />
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-h2 text-text-primary">Case Study</h1>
          <p className="text-text-secondary mt-4">
            Poznaj historie sukcesu naszych klientów.
          </p>
        </div>

        {studies.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-text-secondary">Case studies pojawią się wkrótce.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studies.map((study) => (
              <CaseStudyCard
                key={study.slug}
                slug={study.slug}
                title={study.title}
                client={study.client}
                industry={study.industry}
                metrics={study.metrics}
                coverUrl={study.coverImage?.url}
                tags={study.tags}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
