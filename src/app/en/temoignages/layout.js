// src/app/en/temoignages/layout.js

import { GLOBAL_REVIEW_COUNT, GLOBAL_REVIEW_RATING } from "@/config/siteConfig";
import { hreflangForEn } from "@/config/i18n";

export const metadata = {
  title: `Patient Reviews (${GLOBAL_REVIEW_RATING}/5) ⭐ Osteopath Sèvres & Paris 15`,
  description: `${GLOBAL_REVIEW_COUNT} reviews, ${GLOBAL_REVIEW_RATING}/5, for Hilary Farid, Osteopath D.O. in Sèvres and Paris 15: infants, pregnancy and Renata França drainage.`,
  alternates: hreflangForEn("/en/temoignages"),
  openGraph: {
    title: "Patient Reviews & Testimonials | Hilary Farid Osteopath D.O.",
    description:
      "Read what our patients say about their experience in Sèvres and Paris 15. Gentle osteopathy, paediatric care and Renata França lymphatic drainage.",
    url: "https://www.hilaryfarid-osteopathe.fr/en/temoignages",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function TemoignagesEnLayout({ children }) {
  return <>{children}</>;
}
