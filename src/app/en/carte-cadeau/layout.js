// src/app/en/carte-cadeau/layout.js

import { hreflangForEn } from "@/config/i18n";

export const metadata = {
  title: "Gift Card – Renata França Drainage",
  description:
    "Give the gift of a Renata França drainage session or course in Sèvres or Paris 15. The ideal gift card for a birthday, post-partum, or simply to treat someone. English spoken.",
  alternates: hreflangForEn("/en/carte-cadeau"),
  openGraph: {
    title: "Gift Card – Renata França Drainage | Hilary Farid",
    description:
      "Give the gift of lightness: a Renata França drainage session or course in Sèvres or Paris 15.",
    url: "https://www.hilaryfarid-osteopathe.fr/en/carte-cadeau",
  },
};

export default function CarteCadeauEnLayout({ children }) {
  return children;
}
