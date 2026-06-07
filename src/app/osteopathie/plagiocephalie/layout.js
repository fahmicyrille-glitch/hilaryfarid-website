export const metadata = {
  title: "Plagiocéphalie Positionnelle : Ostéopathe Nourrisson Sèvres & Paris 15 | Hilary Farid",
  description:
    "Tête plate, aplatissement crânien positionnel du nourrisson : l'ostéopathie aide dès les premières semaines. Résultats remarquables avant 4 mois. Cabinet à Sèvres (92310) et Paris 15 (75015).",
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr/osteopathie/plagiocephalie",
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
