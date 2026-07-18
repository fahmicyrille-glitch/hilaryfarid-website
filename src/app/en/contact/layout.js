// src/app/en/contact/layout.js

import { hreflangForEn } from "@/config/i18n";

export const metadata = {
  title: "Contact & Appointments — Osteopath Sèvres & Paris 15",
  description:
    "Book an appointment online with Hilary Farid, Osteopath D.O. in Sèvres and Paris 15. Hours, directions (Metro/Tram) and a direct contact form. English spoken.",
  alternates: hreflangForEn("/en/contact"),
  openGraph: {
    title: "Book an Appointment with Hilary Farid | Osteopath Sèvres & Paris 15",
    description:
      "Find all practical information: directions, hours and a direct contact form for your osteopathy and Renata França drainage sessions.",
    url: "https://www.hilaryfarid-osteopathe.fr/en/contact",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function ContactEnLayout({ children }) {
  return <>{children}</>;
}
