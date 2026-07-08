// src/app/temoignages/layout.js

import { GLOBAL_REVIEW_COUNT, GLOBAL_REVIEW_RATING } from "@/config/siteConfig";

export const metadata = {
  title: `Avis Patients (${GLOBAL_REVIEW_RATING}/5) ⭐ Ostéopathe Sèvres & Paris 15`,
  description: `${GLOBAL_REVIEW_COUNT} avis ${GLOBAL_REVIEW_RATING}/5 sur Hilary Farid, ostéopathe D.O. à Sèvres et Paris 15 : nourrissons, grossesse et drainage Renata França.`,
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr/temoignages",
  },
  openGraph: {
    title: "Avis & Témoignages patients | Hilary Farid Ostéopathe DO",
    description:
      "Consultez les retours d'expérience de nos patients à Sèvres et Paris 15. Ostéopathie douce, pédiatrie et drainage lymphatique Renata França.",
    url: "https://www.hilaryfarid-osteopathe.fr/temoignages",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function TemoignagesLayout({ children }) {
  return <>{children}</>;
}
