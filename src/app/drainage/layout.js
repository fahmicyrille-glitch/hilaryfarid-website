// src/app/drainage/layout.js

export const metadata = {
  title: { absolute: "Drainage Renata França Sèvres & Paris 15 ⭐ Jambes Légères" },
  description:
    "Drainage Renata França par Hilary Farid, ostéopathe certifiée. Jambes légères, ventre dégonflé, rétention d'eau. RDV à Sèvres & Paris 15.",
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr/drainage",
  },
  openGraph: {
    title: "Drainage Lymphatique Renata França | Hilary Farid Ostéopathe",
    description:
      "L'expertise du drainage Renata França combinée à une approche ostéopathique. Résultats immédiats sur les gonflements et la silhouette à Sèvres & Paris 15.",
    url: "https://www.hilaryfarid-osteopathe.fr/drainage",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function DrainageLayout({ children }) {
  return <>{children}</>;
}
