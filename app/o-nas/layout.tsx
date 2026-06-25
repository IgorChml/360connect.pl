import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "O Nas — Zespół Ekspertów Marketingu",
  description:
    "Poznaj 360 Connect — zespół strategów, analityków i specjalistów performance marketingu z Warszawy. Ponad 120 zrealizowanych projektów i status Google Premier Partner.",
  alternates: { canonical: "/o-nas" },
  openGraph: {
    title: "O Nas — Zespół Ekspertów Marketingu | 360 Connect",
    description:
      "Poznaj zespół 360 Connect — strategów i specjalistów performance marketingu z ponad 120 zrealizowanymi projektami.",
    url: "/o-nas",
  },
};

export default function ONasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs items={[{ name: "O nas", path: "/o-nas" }]} />
      {children}
    </>
  );
}
