// src/app/osteopathie/layout.js

import { hreflangFor } from "@/config/i18n";

export const metadata = {
  title: { absolute: "Ostéopathie Sèvres & Paris 15 ⭐ Nourrisson, Grossesse, Sport" },
  description:
    "Ostéopathe D.O. à Sèvres et Paris 15, spécialisée périnatalité (nourrisson, femme enceinte) et sport. Approche douce pour soulager vos douleurs.",
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr/osteopathie",
    ...hreflangFor("/osteopathie"),
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
