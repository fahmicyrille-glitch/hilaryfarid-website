// ============================================================
// FICHIER : src/app/layout.js
// ============================================================

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BookingModal from "@/components/BookingModal";
import FloatingBookingButtons from "@/components/FloatingBookingButtons";
import FloatingPhoneButton from "@/components/FloatingPhoneButton";
import Script from "next/script";
import localFont from "next/font/local";
import { OPENING_HOURS_SEVRES, OPENING_HOURS_PARIS15 } from "@/config/siteConfig";

const roboto = localFont({
  src: [
    { path: "../fonts/Roboto-Regular.woff2", weight: "400" },
    { path: "../fonts/Roboto-Medium.woff2", weight: "500" },
    { path: "../fonts/Roboto-Bold.woff2", weight: "700" },
  ],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.hilaryfarid-osteopathe.fr"),
  title: {
    default: "Hilary Farid – Ostéopathe DO à Sèvres & Paris 15",
    template: "%s | Hilary Farid",
  },
  description:
    "Hilary Farid, ostéopathe D.O. à Sèvres et Paris 15. Approche douce pour adultes, nourrissons, femmes enceintes et sportifs. Drainage Renata França.",
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr",
  },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Hilary Farid – Ostéopathe DO à Sèvres & Paris 15",
    description:
      "Consultations d'ostéopathie douce et drainage Renata França à Sèvres & Paris 15.",
    url: "https://www.hilaryfarid-osteopathe.fr",
    siteName: "Hilary Farid – Ostéopathe DO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Hilary Farid Ostéopathe Sèvres Paris 15",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ── Données schema (constantes hors du composant pour perf) ──

const SCHEMA_PERSON = {
  "@context": "https://schema.org",
  "@type": ["Person", "Physician"],
  "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid",
  name: "Hilary Farid",
  givenName: "Hilary",
  familyName: "Farid",
  jobTitle: "Ostéopathe D.O.",
  description:
    "Ostéopathe D.O. spécialisée en périnatalité (nourrissons, femmes enceintes) et drainage Renata França, à Sèvres (92310) et Paris 15 (75015).",
  image: "https://www.hilaryfarid-osteopathe.fr/hilary.webp",
  url: "https://www.hilaryfarid-osteopathe.fr",
  telephone: "+33672014539",
  email: "hilaryfarid.osteopathe@gmail.com",
  identifier: { "@type": "PropertyValue", name: "ADELI", value: "920014750" },
  medicalSpecialty: { "@type": "MedicalSpecialty", name: "Osteopathic Medicine" },
  knowsAbout: [
    "Ostéopathie", "Périnatalité", "Ostéopathie nourrisson",
    "Drainage Renata França", "Drainage lymphatique méthode Renata França",
    "Freins restrictifs", "Ostéopathie femme enceinte", "Post-partum",
  ],
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Institut Dauphine d'Ostéopathie (IDO Paris)", url: "https://www.ido-paris.fr" },
    { "@type": "EducationalOrganization", name: "Centre YGY – Catherine Rybus" },
    { "@type": "EducationalOrganization", name: "CFPCO" },
    { "@type": "EducationalOrganization", name: "SPA Renata França" },
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Ostéopathe",
    occupationalCategory: "2269",
    skills: "Ostéopathie, Drainage Renata França, Périnatalité",
  },
  worksFor: [
    { "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-sevres" },
    { "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-paris15" },
  ],
  sameAs: [
    "https://www.doctolib.fr/osteopathe/sevres/hilary-farid",
  ],
};

const SCHEMA_CABINET_SEVRES = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-sevres",
  name: "Hilary Farid – Ostéopathe DO Sèvres",
  alternateName: "Cabinet d'ostéopathie Sèvres – Hilary Farid",
  url: "https://www.hilaryfarid-osteopathe.fr/sevres",
  telephone: "+33672014539",
  email: "hilaryfarid.osteopathe@gmail.com",
  image: "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/cabinet-sevres-1.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "104 Grande Rue",
    addressLocality: "Sèvres",
    postalCode: "92310",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 48.822013, longitude: 2.2179 },
  openingHoursSpecification: OPENING_HOURS_SEVRES,
  priceRange: "€€",
  identifier: { "@type": "PropertyValue", name: "SIRET", value: "90179515300013" },
  legalName: "SIREN 901795153",
  medicalSpecialty: "Osteopathic",
  hasMap: "https://share.google/vyqDUNKOo1q0HmayO",
  sameAs: ["https://www.doctolib.fr/osteopathe/sevres/hilary-farid"],
  employee: { "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid" },
  areaServed: [
    { "@type": "City", name: "Sèvres" },
    { "@type": "City", name: "Meudon" },
    { "@type": "City", name: "Chaville" },
    { "@type": "City", name: "Vanves" },
    { "@type": "City", name: "Boulogne-Billancourt" },
    { "@type": "City", name: "Issy-les-Moulineaux" },
  ],
  availableService: [
    { "@type": "MedicalTherapy", name: "Ostéopathie" },
    { "@type": "MedicalTherapy", name: "Ostéopathie nourrisson" },
    { "@type": "MedicalTherapy", name: "Ostéopathie femme enceinte" },
    { "@type": "MedicalTherapy", name: "Drainage Renata França" },
  ],
};

const SCHEMA_CABINET_PARIS15 = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-paris15",
  name: "Hilary Farid – Ostéopathe DO Paris 15",
  alternateName: "Cabinet d'ostéopathie Paris 15 – Hilary Farid",
  url: "https://www.hilaryfarid-osteopathe.fr/paris15",
  telephone: "+33672014539",
  email: "hilaryfarid.osteopathe@gmail.com",
  image: "https://www.hilaryfarid-osteopathe.fr/cabinet-paris15/cabinet-paris15-1.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "28 Rue Letellier",
    addressLocality: "Paris",
    postalCode: "75015",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 48.847151, longitude: 2.293107 },
  openingHoursSpecification: OPENING_HOURS_PARIS15,
  priceRange: "€€",
  identifier: { "@type": "PropertyValue", name: "SIRET", value: "90179515300021" },
  legalName: "SIREN 901795153",
  medicalSpecialty: "Osteopathic",
  hasMap: "https://share.google/fQuSNhyJKa5uEN5gK",
  sameAs: ["https://www.doctolib.fr/osteopathe/paris/hilary-farid"],
  employee: { "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid" },
  areaServed: [
    { "@type": "City", name: "Paris 15ème arrondissement" },
    { "@type": "AdministrativeArea", name: "Grenelle" },
    { "@type": "AdministrativeArea", name: "Beaugrenelle" },
    { "@type": "AdministrativeArea", name: "Commerce" },
    { "@type": "AdministrativeArea", name: "Javel" },
    { "@type": "AdministrativeArea", name: "Convention" },
    { "@type": "City", name: "Issy-les-Moulineaux" },
  ],
  availableService: [
    { "@type": "MedicalTherapy", name: "Ostéopathie" },
    { "@type": "MedicalTherapy", name: "Ostéopathie nourrisson" },
    { "@type": "MedicalTherapy", name: "Ostéopathie femme enceinte" },
    { "@type": "MedicalTherapy", name: "Drainage Renata França" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={roboto.variable}>
      <head>
        {/* Le preload de l'image hero est géré par next/image (priority) —
            un <link rel="preload"> manuel provoquerait un double téléchargement */}

        {/* ── JSON-LD inline (dans le HTML initial, lisible par Google dès le crawl) ──
            3 entités : Person/Physician + 2x MedicalBusiness/LocalBusiness          */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_PERSON) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_CABINET_SEVRES) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_CABINET_PARIS15) }}
        />

        <Script id="gtm-head" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MN4339H9');`}
        </Script>
      </head>

      <body className="bg-offwhite text-primary antialiased">
        {/* Sans JS, les sections .reveal doivent rester visibles */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;filter:none !important;}`}</style>
        </noscript>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MN4339H9"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* GA4 + Google Ads */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BWDXGTQJKT" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config','G-BWDXGTQJKT');
            gtag('config','AW-18051131439');`}
        </Script>

        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollProgressBar />
        <FloatingBookingButtons />
        <FloatingPhoneButton />
        <BookingModal />

        {/* Chatbase */}
        <Script id="chatbase-chatbot" strategy="lazyOnload">
          {`(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="4nLAVyx6WTo4JJTaR2ODQ";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`}
        </Script>
      </body>
    </html>
  );
}
