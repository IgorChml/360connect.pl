// Centralized site metadata used across SEO tags, structured data and the UI.
// Update business details (phone, address, social profiles) here in one place.

export const siteConfig = {
  name: "360 Connect",
  legalName: "360 Connect",
  url: "https://www.360connect.com.pl",
  locale: "pl_PL",
  description:
    "Agencja performance marketingu z Poznania. SEO, Google Ads, Meta Ads i content marketing oparte na danych. Pojedyncze usługi lub pełny pakiet — pierwszy raport w 14 dni.",
  email: "kontakt@360connect.com.pl",
  phone: "+48 690 004 275",
  vatId: "PL7831897775",
  taxId: "7831897775",
  founder: "Igor Chmiel",
  address: {
    locality: "Poznań",
    region: "Wielkopolskie",
    country: "PL",
  },
  // Dodaj prawdziwe profile, gdy będą gotowe — puste wpisy nie są renderowane,
  // żeby uniknąć martwych linków (href="#").
  social: {
    linkedin: "",
    facebook: "https://www.facebook.com/profile.php?id=61585539484076",
    instagram: "https://www.instagram.com/360connectagency/",
  } as Record<string, string>,
  foundingYear: "2020",
} as const;

export type SiteConfig = typeof siteConfig;
