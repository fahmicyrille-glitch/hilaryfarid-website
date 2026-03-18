// src/app/drainage/layout.js

export const metadata = {
  title: "Drainage Renata França Sèvres & Paris 15 ⭐ Jambes Légères - Hilary Farid",
  description:
    "Drainage lymphatique Renata França par Hilary Farid (Ostéopathe certifiée). Retrouvez des jambes légères et un ventre plat. Idéal rétention d'eau et détox. RDV à Sèvres & Paris 15.",
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
