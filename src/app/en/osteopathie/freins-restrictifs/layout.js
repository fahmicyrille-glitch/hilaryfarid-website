// src/app/en/osteopathie/freins-restrictifs/layout.js

import { hreflangForEn } from "@/config/i18n";

export const metadata = {
  title: { absolute: "Tongue-Tie & Lip-Tie in Infants: Osteopathy & Frenectomy" },
  description:
    "Tongue-tie or lip-tie: osteopathy supports your baby before and after the frenectomy. Difficult breastfeeding, sucking difficulties. Sèvres & Paris 15. English spoken.",
  alternates: hreflangForEn("/en/osteopathie/freins-restrictifs"),
  openGraph: {
    title: "Tongue-Tie & Lip-Tie in Infants — Osteopathy | Hilary Farid D.O.",
    description:
      "Osteopath specialising in the care of restrictive oral ties (tongue-tie & lip-tie) in Paris 15 and Sèvres. Tongue and lip-tie: support before and after frenectomy.",
    url: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/freins-restrictifs",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function FreinsRestrictifsEnLayout({ children }) {
  return <>{children}</>;
}
