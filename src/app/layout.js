// src/app/layout.js
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Script from "next/script";
import localFont from "next/font/local";

/* ================================
   FONTS LOCALES
================================ */
const roboto = localFont({
  src: [
    { path: "../fonts/Roboto-Regular.woff2", weight: "400" },
    { path: "../fonts/Roboto-Medium.woff2", weight: "500" },
    { path: "../fonts/Roboto-Bold.woff2", weight: "700" }
  ],
  variable: "--font-roboto",
  display: "swap",
});

/* ================================
   METADATA
================================ */
export const metadata = {
  metadataBase: new URL("https://www.hilaryfarid-osteopathe.fr"),
  title: {
    default: "Hilary Farid – Ostéopathe DO à Sèvres & Paris 15",
    template: "%s | Hilary Farid – Ostéopathe DO",
  },
  description:
    "Hilary Farid, ostéopathe DO à Sèvres et Paris 15. Consultations pour adultes, nourrissons, femmes enceintes et sportifs.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Hilary Farid – Ostéopathe DO à Sèvres & Paris 15",
    description:
      "Consultations d'ostéopathie et drainage lymphatique méthode Renata França à Sèvres et Paris 15.",
    url: "https://www.hilaryfarid-osteopathe.fr",
    siteName: "Hilary Farid – Ostéopathe DO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: { index: true, follow: true },
};

/* ================================
   ROOT LAYOUT
================================ */
export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={roboto.className}>
      <head>
        <link rel="preload" as="style" href="/_next/static/css/app/layout.css" />

        {/* PRELOAD IMAGE – accélère le LCP de l'image Hilary */}
        <link
          rel="preload"
          as="image"
          href="/hilary.webp"
          imageSrcSet="/hilary.webp 600w"
          imageSizes="100vw"
        />

        {/* GOOGLE TAG MANAGER */}
        <Script id="gtm-head" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-MN4339H9'+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MN4339H9');
          `}
        </Script>
        {/* END GTM */}

        {/* GOOGLE ANALYTICS – Lazy */}
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
              gtag('config', 'G-BWDXGTQJKT', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>

      <body className={`${roboto.variable} bg-offwhite text-primary`}>

        {/* GOOGLE TAG MANAGER (NOSCRIPT) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MN4339H9"
        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {/* END GTM NOSCRIPT */}

        {/* JSON-LD global */}
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
                logo: "https://www.hilaryfarid-osteopathe.fr/hilary-logo.svg",
                medicalSpecialty: [
                  "Osteopathy", "PregnancyCare", "SportsMedicine", "Pediatric"
                ],
                knowsAbout: [
                  "Ostéopathie adulte",
                  "Ostéopathie femme enceinte",
                  "Ostéopathie nourrisson",
                  "Ostéopathie pédiatrique",
                  "Ostéopathie du sport"
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

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <Footer />

        {/* SCROLL PROGRESS BAR (React uniquement) */}
        <ScrollProgressBar />

      </body>
    </html>
  );
}
