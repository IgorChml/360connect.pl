import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Polityka Cookies",
  description:
    "Polityka cookies serwisu 360 Connect — jakie pliki cookies wykorzystujemy, w jakim celu oraz jak zarządzać ich ustawieniami w przeglądarce.",
  alternates: { canonical: "/polityka-cookies" },
  robots: { index: true, follow: true },
};

export default function PolitykaCookiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Polityka cookies", path: "/polityka-cookies" }]} />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-h2 text-text-primary mb-8">Polityka cookies</h1>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-h3 text-text-primary mb-3">1. Czym są pliki cookies</h2>
              <p>
                Pliki cookies to niewielkie pliki tekstowe zapisywane na urządzeniu
                użytkownika podczas korzystania z serwisu. Umożliwiają one prawidłowe
                działanie strony oraz analizę sposobu, w jaki jest używana.
              </p>
            </div>

            <div>
              <h2 className="text-h3 text-text-primary mb-3">2. Rodzaje wykorzystywanych cookies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-text-primary">Niezbędne</strong> — konieczne do
                  prawidłowego funkcjonowania serwisu.
                </li>
                <li>
                  <strong className="text-text-primary">Analityczne</strong> — pomagają
                  zrozumieć, w jaki sposób użytkownicy korzystają z serwisu (np. Google
                  Analytics).
                </li>
                <li>
                  <strong className="text-text-primary">Marketingowe</strong> — służą do
                  prezentowania dopasowanych treści reklamowych.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-h3 text-text-primary mb-3">3. Zarządzanie cookies</h2>
              <p>
                W każdej chwili możesz zmienić ustawienia dotyczące plików cookies w swojej
                przeglądarce — w tym zablokować ich zapisywanie lub usunąć już zapisane
                pliki. Ograniczenie stosowania cookies może wpłynąć na niektóre funkcje serwisu.
              </p>
            </div>

            <div>
              <h2 className="text-h3 text-text-primary mb-3">4. Kontakt</h2>
              <p>
                W razie pytań dotyczących wykorzystania plików cookies napisz do nas:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-signal hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
