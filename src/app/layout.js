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

export const metadata = {
  metadataBase: new URL("https://www.hilaryfarid-osteopathe.fr"),
  title: {
    default: "Hilary Farid – Ostéopathe DO à Sèvres & Paris 15",
    template: "%s | Hilary Farid",
  },
  description:
    "Hilary Farid, ostéopathe D.O. à Sèvres et Paris 15. Approche douce pour adultes, nourrissons, femmes enceintes et sportifs. Drainage lymphatique Renata França.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Hilary Farid – Ostéopathe DO à Sèvres & Paris 15",
    description:
      "Consultations d'ostéopathie douce et drainage lymphatique méthode Renata França.",
    url: "https://www.hilaryfarid-osteopathe.fr",
    siteName: "Hilary Farid – Ostéopathe DO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Hilary Farid Ostéopathe Sèvres Paris 15"
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={roboto.variable}>
      <head>
        {/* PRELOAD IMAGE – Avec fetchPriority pour écraser la concurrence au chargement */}
        <link
          rel="preload"
          as="image"
          href="/Hilary.webp"
          fetchpriority="high"
        />

        {/* GOOGLE TAG MANAGER - Chargé de manière moins agressive */}
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
      </head>

      <body className="bg-offwhite text-primary antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MN4339H9"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* GOOGLE ANALYTICS - lazyOnload libère le thread principal pour le score de performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BWDXGTQJKT"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BWDXGTQJKT');
            gtag('config', 'AW-18051131439');
          `}
        </Script>

        <Script
          id="ld-global-hilary-farid"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Person", "Physician"],
              "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid",
              name: "Hilary Farid",
              jobTitle: "Ostéopathe D.O.",
              description: "Ostéopathe D.O. spécialisée en périnalité et drainage lymphatique Renata França à Sèvres et Paris 15.",
              image: "https://www.hilaryfarid-osteopathe.fr/Hilary.webp",
              url: "https://www.hilaryfarid-osteopathe.fr",
              telephone: "+33 6 72 01 45 39",
              address: [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "104 Grande Rue",
                  "addressLocality": "Sèvres",
                  "postalCode": "92310"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "28 Rue Letellier",
                  "addressLocality": "Paris",
                  "postalCode": "75015"
                }
              ],
              sameAs: [
                "https://www.doctolib.fr/osteopathe/sevres/hilary-farid",
                "https://www.instagram.com/hilaryfarid_osteo"
              ]
            })
          }}
        />

        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollProgressBar />
      </body>
    </html>
  );
}
