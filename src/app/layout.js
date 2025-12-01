// src/app/layout.js
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Script from "next/script";
import localFont from "next/font/local";

// ================================
//   FONTS LOCALES – PAS DE GOOGLE FONTS
// ================================
const roboto = localFont({
  src: [
    { path: "../fonts/Roboto-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Roboto-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Roboto-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-roboto",
  display: "swap",
});

// ================================
//   SEO / METADATA
// ================================
export const metadata = {
  metadataBase: new URL("https://www.hilaryfarid-osteopathe.fr"),
  title: {
    default: "Hilary Farid – Ostéopathe DO à Sèvres & Paris 15",
    template: "%s | Hilary Farid – Ostéopathe DO",
  },
  description:
    "Hilary Farid, ostéopathe DO à Sèvres et Paris 15. Consultations pour adultes, nourrissons, femmes enceintes et post-accouchement, ainsi que drainage lymphatique méthode Renata França.",
  icons: { icon: "/favicon.ico" },
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
  robots: { index: true, follow: true },
};

// ================================
//   ROOT LAYOUT
// ================================
export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={roboto.className}>
      <head>
        {/* PRELOAD CSS – accélère le LCP */}
        <link rel="preload" href="/globals.css" as="style" />
        <link rel="stylesheet" href="/globals.css" />
        <link
          rel="preload"
          as="image"
          href="/hilary.webp"
          imagesrcset="/hilary.webp 600w"
          imagesizes="100vw"
        />

        {/* ⚡ Google Analytics – lazy pour optimiser le LCP */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BWDXGTQJKT"
          strategy="lazyOnload"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
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

      <body className={`${roboto.variable} bg-offwhite text-primary`}>

        {/* JSON-LD – lazy pour réduire le main-thread */}
        <Script
          id="ld-global-hilary-farid"
          type="application/ld+json"
          strategy="lazyOnload"
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
                  "Pediatric",
                ],
                knowsAbout: [
                  "Ostéopathie adulte",
                  "Ostéopathie femme enceinte",
                  "Ostéopathie nourrisson",
                  "Ostéopathie pédiatrique",
                  "Ostéopathie du sport",
                  "Douleurs articulaires",
                  "Mobilité articulaire",
                ],
                sameAs: [
                  "https://www.doctolib.fr/osteopathe/sevres/hilary-farid",
                  "https://www.google.com/maps/place/104+Grande+Rue,+92310+Sèvres",
                  "https://www.google.com/maps/place/28+Rue+Letellier,+75015+Paris",
                ],
              },
              null,
              2
            ),
          }}
        />

        {/* HEADER + PAGE CONTENT */}
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Scroll Progress – chargé après LCP */}
        <Script id="scroll-progressbar" strategy="lazyOnload">
          {`
            window.addEventListener("scroll", () => {
              const bar = document.querySelector('#scroll-progress');
              if (!bar) return;
              const scrollTop = window.scrollY;
              const docHeight = document.body.scrollHeight - window.innerHeight;
              const progress = (scrollTop / docHeight) * 100;
              bar.style.width = progress + "%";
            });
          `}
        </Script>

        {/* Conteneur HTML de la barre */}
        <ScrollProgressBar />
      </body>
    </html>
  );
}
