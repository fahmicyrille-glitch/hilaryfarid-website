// src/app/en/osteopathie/nourrisson/layout.js

import { hreflangForEn } from "@/config/i18n";

export const metadata = {
  title: "Infant Osteopathy Sèvres & Paris 15",
  description:
    "Osteopath specialising in infants in Paris 15 and Sèvres: colic, reflux, plagiocephaly, tongue-tie & lip-tie, torticollis. Extremely gentle techniques. English spoken.",
  alternates: hreflangForEn("/en/osteopathie/nourrisson"),
  openGraph: {
    title: "Infant & Baby Osteopathy – Paris 15 & Sèvres | Hilary Farid",
    description:
      "Osteopathy consultations for infants: colic, reflux, plagiocephaly, tongue-tie & lip-tie, torticollis. Specialist trained at Centre YGY.",
    url: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/nourrisson",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function NourrissonEnLayout({ children }) {
  return <>{children}</>;
}
