import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Polityka Prywatności",
  description:
    "Polityka prywatności serwisu 360 Connect — zasady przetwarzania danych osobowych, podstawy prawne, prawa użytkownika i informacje o administratorze danych.",
  alternates: { canonical: "/polityka-prywatnosci" },
  robots: { index: true, follow: true },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Polityka prywatności", path: "/polityka-prywatnosci" }]} />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl prose-content">
          <h1 className="text-h2 text-text-primary mb-8">Polityka prywatności</h1>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-h3 text-text-primary mb-3">1. Administrator danych</h2>
              <p>
                Administratorem danych osobowych jest {siteConfig.legalName} z siedzibą
                w {siteConfig.address.locality}. W sprawach dotyczących ochrony danych
                osobowych można kontaktować się pod adresem:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-signal hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-h3 text-text-primary mb-3">2. Zakres i cel przetwarzania</h2>
              <p>
                Dane osobowe (np. imię, adres e-mail, numer telefonu, nazwa firmy)
                przetwarzamy w celu obsługi zapytań przesłanych przez formularz
                kontaktowy, przygotowania wyceny oraz realizacji usług marketingowych.
                Podanie danych jest dobrowolne, ale niezbędne do udzielenia odpowiedzi.
              </p>
            </div>

            <div>
              <h2 className="text-h3 text-text-primary mb-3">3. Podstawa prawna</h2>
              <p>
                Dane przetwarzamy na podstawie art. 6 ust. 1 lit. a, b i f RODO —
                tj. zgody osoby, której dane dotyczą, niezbędności do wykonania umowy
                oraz prawnie uzasadnionego interesu administratora.
              </p>
            </div>

            <div>
              <h2 className="text-h3 text-text-primary mb-3">4. Okres przechowywania</h2>
              <p>
                Dane przechowujemy przez okres niezbędny do realizacji celów, dla
                których zostały zebrane, a następnie przez czas wymagany przepisami prawa
                lub do momentu cofnięcia zgody.
              </p>
            </div>

            <div>
              <h2 className="text-h3 text-text-primary mb-3">5. Prawa użytkownika</h2>
              <p>
                Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia lub
                ograniczenia przetwarzania, prawo do przenoszenia danych, wniesienia
                sprzeciwu oraz cofnięcia zgody w dowolnym momencie. Przysługuje Ci
                również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
              </p>
            </div>

            <div>
              <h2 className="text-h3 text-text-primary mb-3">6. Odbiorcy danych</h2>
              <p>
                Dane mogą być powierzane podmiotom przetwarzającym na nasze zlecenie,
                m.in. dostawcom usług hostingowych, analitycznych i poczty
                elektronicznej, wyłącznie w zakresie niezbędnym do realizacji usług.
              </p>
            </div>

            <div>
              <h2 className="text-h3 text-text-primary mb-3">7. Pliki cookies</h2>
              <p>
                Serwis korzysta z plików cookies. Szczegółowe informacje znajdziesz w{" "}
                <a href="/polityka-cookies" className="text-signal hover:underline">
                  Polityce cookies
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
