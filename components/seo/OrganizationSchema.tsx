/**
 * JSON-LD ze strukturą firmy (LocalBusiness / ProfessionalService).
 * Dane NAP + NIP + założyciel (CEO) dla rich resultów i AI search.
 */
const SITE_URL = "https://360connect.pl";

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "360 Connect",
  legalName: "360 Connect",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/logo.svg`,
  description:
    "Agencja performance marketingu. SEO, Google Ads, Meta Ads i content marketing — marketing 360°, który widać w przychodzie.",
  email: "kontakt@360connect.pl",
  telephone: "+48690004275",
  vatID: "PL7831897775",
  taxID: "7831897775",
  founder: {
    "@type": "Person",
    name: "Igor Chmiel",
    jobTitle: "CEO",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Poznań",
    addressCountry: "PL",
  },
  areaServed: [
    { "@type": "Country", name: "Polska" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  knowsAbout: [
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Content marketing",
    "Performance marketing",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "kontakt@360connect.pl",
    telephone: "+48690004275",
    areaServed: "PL",
    availableLanguage: ["Polish", "English"],
  },
};

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
