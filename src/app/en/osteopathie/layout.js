// src/app/en/osteopathie/layout.js

import { hreflangForEn } from "@/config/i18n";

export const metadata = {
  title: { absolute: "Osteopathy Sèvres & Paris 15 ⭐ Infant, Pregnancy, Sport" },
  description:
    "Osteopath D.O. in Sèvres and Paris 15, specialised in perinatal care (infants, pregnant women) and sport. A gentle approach to relieve your pain. English spoken.",
  alternates: hreflangForEn("/en/osteopathie"),
  openGraph: {
    title: "Gentle Osteopathy in Sèvres & Paris 15 | Hilary Farid Osteopath D.O.",
    description:
      "Osteopathy consultations for the whole family. Expertise in infants, pregnancy follow-up, athletes and adults. Book your appointment online.",
    url: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function OsteopathieEnLayout({ children }) {
  return <>{children}</>;
}
