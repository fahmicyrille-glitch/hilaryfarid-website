// src/app/en/a-propos/layout.js

import { hreflangForEn } from "@/config/i18n";

export const metadata = {
  title: { absolute: "Hilary Farid ⭐ Osteopath D.O. Perinatal Care & Drainage" },
  description:
    "Hilary Farid, Osteopath D.O. in Sèvres and Paris 15: background, training, expertise in infants (tongue-tie), pregnancy and the Renata França method.",
  alternates: hreflangForEn("/en/a-propos"),
  openGraph: {
    title: "About Hilary Farid | Osteopath D.O. Sèvres & Paris 15",
    description:
      "Hilary Farid's background, training and expertise. Gentle, comprehensive care for the whole family, from infants to athletes.",
    url: "https://www.hilaryfarid-osteopathe.fr/en/a-propos",
    images: [
      {
        url: "/hilary.webp",
        width: 1200,
        height: 630,
        alt: "Hilary Farid, Osteopath D.O. in Sèvres and Paris 15",
      },
    ],
    type: "profile",
  },
};

export default function AProposEnLayout({ children }) {
  return <>{children}</>;
}
