// src/app/paris15/layout.js

export const metadata = {
  title: "Ostéopathe Paris 15 ⭐ Cabinet Rue Letellier - Hilary Farid",
  description:
    "Cabinet d'ostéopathie à Paris 15 (75015), 28 Rue Letellier. Expertise nourrissons, grossesse, sportifs et adultes. Proche Métro Commerce & La Motte-Picquet. Prenez RDV avec Hilary Farid, Ostéopathe D.O.",
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr/paris15",
  },
  openGraph: {
    title: "Cabinet d'Ostéopathie Paris 15 - Hilary Farid Ostéopathe DO",
    description:
      "Besoin d'un ostéopathe à Paris 15 ? Consultations douces au 28 Rue Letellier. Spécialisée en périnatilité et sport. Accès facile Métro Commerce / Émile Zola.",
    url: "https://www.hilaryfarid-osteopathe.fr/paris15",
    images: [
      {
        url: "/cabinet-paris15/cabinet-paris15-1.webp",
        width: 1200,
        height: 630,
        alt: "Cabinet d'ostéopathie Hilary Farid Paris 15",
      },
    ],
    type: "website",
  },
};

export default function Paris15Layout({ children }) {
  return <>{children}</>;
}
