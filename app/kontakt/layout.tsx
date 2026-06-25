import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Kontakt — Bezpłatny Audyt Marketingowy",
  description:
    "Skontaktuj się z 360 Connect i zamów bezpłatny audyt marketingowy. Opisz swój projekt — przygotujemy wycenę i propozycję działań w ciągu 24 godzin.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt — Bezpłatny Audyt Marketingowy | 360 Connect",
    description:
      "Zamów bezpłatny audyt marketingowy. Odpowiadamy w ciągu 24 godzin.",
    url: "/kontakt",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${siteConfig.url}/kontakt`,
  name: "Kontakt — 360 Connect",
  description:
    "Strona kontaktowa agencji performance marketingu 360 Connect.",
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.name,
    email: siteConfig.email,
    telephone: siteConfig.phone,
  },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <Breadcrumbs items={[{ name: "Kontakt", path: "/kontakt" }]} />
      {children}
    </>
  );
}
