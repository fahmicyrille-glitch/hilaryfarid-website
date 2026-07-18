import { hreflangFor } from "@/config/i18n";

export const metadata = {
  title: { absolute: "Plagiocéphalie : Ostéopathe Nourrisson Sèvres & Paris 15" },
  description:
    "Tête plate du nourrisson : l'ostéopathie aide dès les premières semaines, avec les meilleurs résultats avant 4 mois. Cabinets à Sèvres et Paris 15.",
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr/osteopathie/plagiocephalie",
    ...hreflangFor("/osteopathie/plagiocephalie"),
  },
  openGraph: {
    title: "Plagiocéphalie Nourrisson — Ostéopathie Douce | Hilary Farid D.O.",
    description:
      "Votre bébé a la tête plate ? L'ostéopathie agit tôt pour libérer les tensions crâniennes et cervicales. Cabinet Sèvres & Paris 15.",
    url: "https://www.hilaryfarid-osteopathe.fr/osteopathie/plagiocephalie",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function PlagiocephalieLayout({ children }) {
  return <>{children}</>;
}
