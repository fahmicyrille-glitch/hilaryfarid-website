// src/app/osteopathie/layout.js

export const metadata = {
  title: "Ostéopathie Sèvres & Paris 15 ⭐ Nourrisson, Grossesse & Sport - Hilary Farid",
  description:
    "Ostéopathe D.O. à Sèvres et Paris 15 spécialisée en périnalité (nourrisson, femme enceinte) et sport. Approche douce pour soulager vos douleurs et retrouver votre mobilité.",
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr/osteopathie",
  },
  openGraph: {
    title: "Ostéopathie douce à Sèvres & Paris 15 | Hilary Farid Ostéopathe DO",
    description:
      "Consultations d'ostéopathie pour toute la famille. Expertise nourrissons, suivi de grossesse, sportifs et adultes. Prenez rendez-vous en ligne.",
    url: "https://www.hilaryfarid-osteopathe.fr/osteopathie",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function OsteopathieLayout({ children }) {
  return <>{children}</>;
}
