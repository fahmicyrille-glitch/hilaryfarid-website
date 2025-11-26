import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Script from "next/script";

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
    <html lang="fr">
      <body className="bg-offwhite text-primary">

        {/* --------- PERSON SCHEMA --------- */}
        <Script
          id="ld-person-hilary-farid"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Hilary Farid",
                jobTitle: "Ostéopathe D.O.",
                telephone: "+33 6 72 01 45 39",
                url: "https://www.hilaryfarid-osteopathe.fr",
                image: "https://www.hilaryfarid-osteopathe.fr/Hilary.png",
                worksFor: [
                  {
                    "@type": "LocalBusiness",
                    name: "Cabinet d’ostéopathie – Sèvres",
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: "104 Grande Rue",
                      postalCode: "92310",
                      addressLocality: "Sèvres",
                      addressCountry: "FR",
                    },
                  },
                  {
                    "@type": "LocalBusiness",
                    name: "Cabinet d’ostéopathie – Paris 15",
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: "28 Rue Letellier",
                      postalCode: "75015",
                      addressLocality: "Paris",
                      addressRegion: "Île-de-France",
                      addressCountry: "FR",
                    },
                  },
                ],
              },
              null,
              2
            ),
          }}
        />

        {/* --------- PHYSICIAN / MEDICAL SCHEMA --------- */}
        <Script
          id="ld-schema-physician"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Physician",
                "@id": "https://www.hilaryfarid-osteopathe.fr#hilary-farid",
                name: "Hilary Farid",
                image: "https://www.hilaryfarid-osteopathe.fr/Hilary.png",
                description:
                  "Ostéopathe D.O. à Sèvres (92310) et Paris 15 (75015). Spécialisé en ostéopathie adulte, nourrisson, femme enceinte et sportif.",
                medicalSpecialty: [
                  "Osteopathy",
                  "PregnancyCare",
                  "SportsMedicine",
                  "Pediatric"
                ],
                telephone: "+33 6 72 01 45 39",
                url: "https://www.hilaryfarid-osteopathe.fr",

                address: [
                  {
                    "@type": "PostalAddress",
                    streetAddress: "104 Grande Rue",
                    addressLocality: "Sèvres",
                    postalCode: "92310",
                    addressCountry: "FR"
                  },
                  {
                    "@type": "PostalAddress",
                    streetAddress: "28 Rue Letellier",
                    addressLocality: "Paris",
                    postalCode: "75015",
                    addressRegion: "Île-de-France",
                    addressCountry: "FR"
                  }
                ],

                availableService: [
                  { "@type": "MedicalTherapy", name: "Ostéopathie adulte" },
                  { "@type": "MedicalTherapy", name: "Ostéopathie nourrisson" },
                  { "@type": "MedicalTherapy", name: "Ostéopathie femme enceinte" },
                  { "@type": "MedicalTherapy", name: "Ostéopathie du sport" }
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
