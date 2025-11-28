// src/app/layout.js
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Script from "next/script";

// ====== Élimination des requêtes Google Fonts cachées ======
// Next empêche Chrome de charger automati­quement fonts.googleapis.com
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.hilaryfarid-osteopathe.fr"),
  title: {
    default: "Hilary Farid – Ostéopathe DO à Sèvres & Paris 15",
    template: "%s | Hilary Farid – Ostéopathe DO",
  },
  description:
    "Hilary Farid, ostéopathe DO à Sèvres et Paris 15. Consultations pour adultes, nourrissons, femmes enceintes et post-accouchement, ainsi que drainage lymphatique méthode Renata França.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Hilary Farid – Ostéopathe DO à Sèvres & Paris 15",
    description:
      "Consultations d’ostéopathie et drainage lymphatique méthode Renata França à Sèvres et Paris 15. Prise en charge douce et personnalisée.",
    url: "https://www.hilaryfarid-osteopathe.fr",
    siteName: "Hilary Farid – Ostéopathe DO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hilary Farid Ostéopathe DO – Sèvres & Paris 15",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={roboto.className}>
      <head>

        {/* 🔥 PRECONNECTS pour éviter 300ms de latence */}
        <link rel="preconnect" href="https://www.hilaryfarid-osteopathe.fr" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* 🔥 PRELOAD CSS — permet un LCP beaucoup plus rapide */}
        <link
          rel="preload"
          href="/globals.css"
          as="style"
        />
        <link rel="stylesheet" href="/globals.css" />

        {/* --------- GOOGLE ANALYTICS --------- */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BWDXGTQJKT"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BWDXGTQJKT', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>

      <body className="bg-offwhite text-primary">

        {/* --------- JSON-LD GLOBAL --------- */}
        <Script
          id="ld-global-hilary-farid"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": ["Person", "Physician"],
                "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid",
                name: "Hilary Farid",
                jobTitle: "Ostéopathe D.O.",
                image: "https://www.hilaryfarid-osteopathe.fr/Hilary.webp",
                url: "https://www.hilaryfarid-osteopathe.fr",
                telephone: "+33 6 72 01 45 39",
                description:
                  "Ostéopathe D.O. spécialisée en ostéopathie adulte, nourrisson, femme enceinte et sportif. Consultations à Sèvres (92310) et Paris 15 (75015).",
                nationality: "Française",
                medicalSpecialty: [
                  "Osteopathy",
                  "PregnancyCare",
                  "SportsMedicine",
                  "Pediatric"
                ],
                knowsAbout: [
                  "Ostéopathie adulte",
                  "Ostéopathie femme enceinte",
                  "Ostéopathie nourrisson",
                  "Ostéopathie pédiatrique",
                  "Ostéopathie du sport",
                  "Douleurs articulaires",
                  "Mobilité articulaire"
                ],
                sameAs: [
                  "https://www.doctolib.fr/osteopathe/sevres/hilary-farid",
                  "https://www.google.com/maps/place/104+Grande+Rue,+92310+Sèvres",
                  "https://www.google.com/maps/place/28+Rue+Letellier,+75015+Paris"
                ]
              },
              null,
              2
            ),
          }}
        />

        <ScrollProgressBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
