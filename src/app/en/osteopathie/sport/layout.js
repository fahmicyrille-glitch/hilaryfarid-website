// src/app/en/osteopathie/sport/layout.js

import { hreflangForEn } from "@/config/i18n";

export const metadata = {
  title: "Sports Osteopathy Sèvres & Paris 15",
  description:
    "Sports osteopath in Paris 15 and Sèvres: recovery, prevention, tendinitis, sprains, lower back pain. For amateur and competitive athletes.",
  alternates: hreflangForEn("/en/osteopathie/sport"),
  openGraph: {
    title: "Sports Osteopathy – Paris 15 & Sèvres | Hilary Farid",
    description:
      "Osteopathy dedicated to athletes: prevention, recovery, injury treatment. Tendinitis, sprains, back pain in athletes. Clinics in Paris 15 and Sèvres.",
    url: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/sport",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function SportEnLayout({ children }) {
  return <>{children}</>;
}
