// src/app/sevres/layout.js

export const metadata = {
  title: "Ostéopathe Sèvres (92310) ⭐ Cabinet Grande Rue - Hilary Farid",
  description:
    "Cabinet d'ostéopathie à Sèvres, 104 Grande Rue. Expertise nourrissons, grossesse, sportifs et adultes. Proche Tram T2. Prenez RDV en ligne avec Hilary Farid, Ostéopathe D.O.",
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr/sevres",
  },
  openGraph: {
    title: "Cabinet d'Ostéopathie à Sèvres - Hilary Farid Ostéopathe DO",
    description:
      "Besoin d'un ostéopathe à Sèvres ? Consultations douces pour toute la famille au 104 Grande Rue. Accès facile et prise en charge personnalisée.",
    url: "https://www.hilaryfarid-osteopathe.fr/sevres",
    images: [
      {
        url: "/cabinet-sevres/cabinet-sevres-1.webp",
        width: 1200,
        height: 630,
        alt: "Cabinet d'ostéopathie Hilary Farid à Sèvres",
      },
    ],
    type: "website",
  },
};

export default function SevresLayout({ children }) {
  return <>{children}</>;
}
