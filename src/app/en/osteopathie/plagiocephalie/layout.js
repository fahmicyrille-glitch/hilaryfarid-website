// src/app/en/osteopathie/plagiocephalie/layout.js

import { hreflangForEn } from "@/config/i18n";

export const metadata = {
  title: { absolute: "Plagiocephaly (Flat Head Syndrome): Infant Osteopath Sèvres & Paris 15" },
  description:
    "Flat head syndrome in infants: osteopathy can help from the first few weeks, with the best results before 4 months. Clinics in Sèvres and Paris 15.",
  alternates: hreflangForEn("/en/osteopathie/plagiocephalie"),
  openGraph: {
    title: "Infant Plagiocephaly — Gentle Osteopathy | Hilary Farid D.O.",
    description:
      "Does your baby have a flat head? Osteopathy acts early to release cranial and cervical tension. Clinics in Sèvres & Paris 15.",
    url: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/plagiocephalie",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function PlagiocephalieEnLayout({ children }) {
  return <>{children}</>;
}
