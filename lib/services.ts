// Service catalogue — single source of truth for the /uslugi landing pages,
// footer links, sitemap entries and Service structured data.

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceContent {
  slug: string;
  name: string;
  shortName: string;
  // Meta
  title: string;
  description: string;
  keywords: string[];
  // Hero
  heading: string;
  intro: string;
  // Body
  benefits: { title: string; desc: string }[];
  deliverables: string[];
  faq: ServiceFaq[];
}

export const services: ServiceContent[] = [
  {
    slug: "seo",
    name: "Pozycjonowanie i SEO",
    shortName: "SEO",
    title: "Agencja SEO Warszawa — Pozycjonowanie Stron",
    description:
      "Skuteczne pozycjonowanie stron w Warszawie i całej Polsce. Audyt techniczny, content i link building, które budują trwały ruch organiczny z Google. Pierwszy raport w 14 dni.",
    keywords: [
      "agencja SEO Warszawa",
      "pozycjonowanie stron Warszawa",
      "pozycjonowanie stron internetowych",
      "audyt SEO",
    ],
    heading: "Pozycjonowanie, które buduje trwały ruch z Google",
    intro:
      "Łączymy SEO techniczne, content i link building w jedną strategię nastawioną na widoczność i sprzedaż. Zamiast obietnic — mierzalne wzrosty ruchu organicznego i pozycji na frazy, które realnie konwertują.",
    benefits: [
      {
        title: "Trwały ruch organiczny",
        desc: "Budujemy widoczność, która pracuje na Ciebie miesiącami, a nie tylko w czasie trwania kampanii płatnej.",
      },
      {
        title: "Decyzje oparte na danych",
        desc: "Każdą rekomendację opieramy o dane z Google Search Console, Analytics i narzędzi Ahrefs / SEMrush.",
      },
      {
        title: "Przejrzyste raportowanie",
        desc: "Co miesiąc otrzymujesz raport z pozycjami, ruchem i konkretnymi wnioskami na kolejny okres.",
      },
    ],
    deliverables: [
      "Audyt techniczny i on-page",
      "Analiza i dobór słów kluczowych",
      "Strategia i optymalizacja treści",
      "Link building wysokiej jakości",
      "Optymalizacja Core Web Vitals",
      "Comiesięczne raportowanie pozycji",
    ],
    faq: [
      {
        q: "Po jakim czasie SEO przynosi efekty?",
        a: "Pierwsze efekty pozycjonowania widać zwykle po 3–6 miesiącach. Tempo zależy od konkurencyjności branży, stanu wyjściowego strony i intensywności działań.",
      },
      {
        q: "Ile kosztuje pozycjonowanie strony?",
        a: "Współpracę SEO zaczynamy od 1 500 zł miesięcznie. Ostateczna wycena zależy od zakresu, konkurencyjności fraz i celów biznesowych — bezpłatny audyt pozwala ją precyzyjnie określić.",
      },
      {
        q: "Czy dajecie gwarancję pozycji w Google?",
        a: "Nie składamy obietnic „TOP 1 w gwarancji”, bo żadna agencja nie kontroluje algorytmu Google. Gwarantujemy za to przejrzystą pracę, raportowanie i mierzalny wzrost widoczności.",
      },
    ],
  },
  {
    slug: "google-ads",
    name: "Kampanie Google Ads",
    shortName: "Google Ads",
    title: "Agencja Google Ads — Kampanie i Reklama w Google",
    description:
      "Prowadzimy i optymalizujemy kampanie Google Ads (Search, Shopping, Performance Max). Precyzyjne targetowanie, kontrola budżetu i maksymalny zwrot z reklamy w Google.",
    keywords: [
      "kampanie Google Ads",
      "reklama w Google",
      "agencja Google Ads",
      "Google Ads Warszawa",
    ],
    heading: "Reklama w Google, która zarabia na siebie",
    intro:
      "Tworzymy i optymalizujemy kampanie Google Ads nastawione na realny zwrot z inwestycji. Docieramy do klientów dokładnie w momencie, w którym szukają Twoich produktów lub usług.",
    benefits: [
      {
        title: "Szybkie efekty",
        desc: "Pierwsze konwersje z kampanii płatnych widoczne są już w ciągu 2–4 tygodni od startu.",
      },
      {
        title: "Pełna kontrola budżetu",
        desc: "Płacisz tylko za realne kliknięcia, a my pilnujemy, by każda złotówka pracowała na wynik.",
      },
      {
        title: "Optymalizacja pod ROAS",
        desc: "Stale testujemy stawki, kreacje i grupy odbiorców, żeby maksymalizować zwrot z wydatków reklamowych.",
      },
    ],
    deliverables: [
      "Kampanie Search i Shopping",
      "Performance Max i kampanie produktowe",
      "Remarketing dynamiczny",
      "Optymalizacja stawek i budżetu",
      "A/B testy kreacji reklamowych",
      "Śledzenie konwersji i raportowanie",
    ],
    faq: [
      {
        q: "Jaki budżet na Google Ads jest potrzebny na start?",
        a: "Sensowny próg wejścia to zwykle od kilku tysięcy złotych miesięcznie budżetu mediowego, ale optymalna kwota zależy od branży i konkurencji. Pomożemy ją oszacować podczas bezpłatnego audytu.",
      },
      {
        q: "Czy budżet reklamowy jest wliczony w cenę usługi?",
        a: "Nie — wynagrodzenie agencji za prowadzenie kampanii i budżet wydawany w Google Ads to dwie osobne pozycje. Dzięki temu masz pełną przejrzystość kosztów.",
      },
      {
        q: "Jak szybko zobaczę pierwsze wyniki?",
        a: "Kampanie startują w ciągu kilku dni od przekazania materiałów, a pierwsze dane o konwersjach zbieramy zwykle w ciągu 2–4 tygodni.",
      },
    ],
  },
  {
    slug: "meta-ads",
    name: "Kampanie Meta Ads",
    shortName: "Meta Ads",
    title: "Agencja Meta Ads — Reklama na Facebooku i Instagramie",
    description:
      "Kampanie reklamowe na Facebooku i Instagramie, które konwertują i skalują sprzedaż. Prospecting, retargeting, lookalike audiences i optymalizacja ROAS.",
    keywords: [
      "reklama na Facebooku",
      "kampanie Meta Ads",
      "reklama na Instagramie",
      "agencja Facebook Ads",
    ],
    heading: "Reklamy na Facebooku i Instagramie, które skalują sprzedaż",
    intro:
      "Projektujemy kampanie Meta Ads, które budują zasięg wśród nowych odbiorców i domykają sprzedaż dzięki precyzyjnemu retargetingowi. Łączymy mocne kreacje z analityką nastawioną na wynik.",
    benefits: [
      {
        title: "Dotarcie do nowych klientów",
        desc: "Kampanie prospectingowe i lookalike audiences docierają do osób najbardziej podobnych do Twoich najlepszych klientów.",
      },
      {
        title: "Kreacje, które zatrzymują",
        desc: "Tworzymy grafiki i wideo dopasowane do formatu i etapu ścieżki zakupowej odbiorcy.",
      },
      {
        title: "Skalowanie z kontrolą ROAS",
        desc: "Skalujemy to, co działa, pilnując rentowności na każdym etapie lejka sprzedażowego.",
      },
    ],
    deliverables: [
      "Kampanie prospectingowe i retargetingowe",
      "Kreacje graficzne i wideo",
      "Lookalike i custom audiences",
      "Konfiguracja Pixela i Conversions API",
      "Optymalizacja ROAS",
      "Raportowanie wyników sprzedażowych",
    ],
    faq: [
      {
        q: "Czym różni się Meta Ads od Google Ads?",
        a: "Google Ads dociera do osób aktywnie szukających produktu, a Meta Ads (Facebook i Instagram) buduje popyt, prezentując ofertę dopasowanym odbiorcom. Najlepsze efekty daje połączenie obu kanałów.",
      },
      {
        q: "Czy potrzebuję gotowych materiałów reklamowych?",
        a: "Nie. Możemy pracować na Twoich materiałach lub przygotować kreacje graficzne i wideo od podstaw w ramach współpracy.",
      },
      {
        q: "Na jakich rynkach prowadzicie kampanie?",
        a: "Prowadzimy kampanie w Polsce oraz na rynkach zagranicznych — m.in. DACH, UK i w Skandynawii.",
      },
    ],
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    shortName: "Content Marketing",
    title: "Agencja Content Marketing — Strategia Treści",
    description:
      "Content marketing, który przyciąga, edukuje i konwertuje klientów. Strategia treści, artykuły blogowe, materiały premium i dystrybucja wspierająca SEO oraz sprzedaż.",
    keywords: [
      "content marketing agencja",
      "strategia content marketingowa",
      "marketing treści",
      "agencja content marketing Warszawa",
    ],
    heading: "Treści, które przyciągają i konwertują klientów",
    intro:
      "Budujemy content marketing oparty o strategię, a nie przypadkowe publikacje. Tworzymy treści, które pozycjonują markę jako eksperta, wspierają SEO i prowadzą odbiorcę aż do decyzji zakupowej.",
    benefits: [
      {
        title: "Treści zaplanowane strategicznie",
        desc: "Każdy materiał odpowiada na realne pytania klientów i wspiera konkretny etap lejka sprzedażowego.",
      },
      {
        title: "Wsparcie dla SEO",
        desc: "Treści tworzymy pod intencje wyszukiwania, dzięki czemu budują widoczność organiczną w Google.",
      },
      {
        title: "Spójny wizerunek eksperta",
        desc: "Budujemy pozycję marki jako autorytetu w branży poprzez merytoryczne, wartościowe publikacje.",
      },
    ],
    deliverables: [
      "Strategia treści i content plan",
      "Artykuły blogowe i poradniki",
      "Case studies i materiały sprzedażowe",
      "Infografiki i materiały premium",
      "Optymalizacja treści pod SEO",
      "Dystrybucja i promocja treści",
    ],
    faq: [
      {
        q: "Czy content marketing wspiera pozycjonowanie?",
        a: "Tak — wartościowe, zoptymalizowane treści to jeden z filarów skutecznego SEO. Dlatego content marketing i pozycjonowanie najlepiej prowadzić wspólnie.",
      },
      {
        q: "Jak często publikujecie treści?",
        a: "Częstotliwość ustalamy indywidualnie w content planie — zwykle od kilku do kilkunastu materiałów miesięcznie, zależnie od celów i zasobów.",
      },
      {
        q: "Czy piszecie treści w językach obcych?",
        a: "Tak, tworzymy i adaptujemy treści również na rynki zagraniczne, m.in. niemiecki i anglojęzyczny.",
      },
    ],
  },
];

export function getService(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}
