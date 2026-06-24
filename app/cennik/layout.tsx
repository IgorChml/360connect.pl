import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { cennikFaq } from "@/lib/cennikFaq";

export const metadata: Metadata = {
  title: "Cennik Usług Marketingowych od 1500 zł",
  description:
    "Przejrzysty cennik usług performance marketingu 360 Connect. Plany Starter, Growth i Enterprise — od 1 500 zł miesięcznie. Dedykowany opiekun i jasne raportowanie.",
  alternates: { canonical: "/cennik" },
  openGraph: {
    title: "Cennik Usług Marketingowych od 1500 zł | 360 Connect",
    description:
      "Plany Starter, Growth i Enterprise od 1 500 zł miesięcznie. Przejrzyste ceny i mierzalne efekty.",
    url: "/cennik",
  },
};

export default function CennikLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={faqSchema(cennikFaq)} />
      <Breadcrumbs items={[{ name: "Cennik", path: "/cennik" }]} />
      {children}
    </>
  );
}
