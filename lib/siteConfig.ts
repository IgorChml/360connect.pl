// Centralized site metadata used across SEO tags, structured data and the UI.
// Update business details (phone, address, social profiles) here in one place.

export const siteConfig = {
  name: "360 Connect",
  legalName: "360 Connect",
  url: "https://www.360connect.com.pl",
  locale: "pl_PL",
  description:
    "Agencja performance marketingu z Warszawy. SEO, Google Ads, Meta Ads i content marketing oparte na danych. Pojedyncze usługi lub pełny pakiet — pierwszy raport w 14 dni.",
  email: "kontakt@360connect.pl",
  // TODO: zastąp prawdziwym numerem telefonu firmy.
  phone: "+48 123 456 789",
  address: {
    locality: "Warszawa",
    region: "Mazowieckie",
    country: "PL",
  },
  // Dodaj prawdziwe profile, gdy będą gotowe — puste wpisy nie są renderowane,
  // żeby uniknąć martwych linków (href="#").
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
  } as Record<string, string>,
  foundingYear: "2020",
} as const;

export type SiteConfig = typeof siteConfig;
