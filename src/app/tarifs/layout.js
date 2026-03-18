// src/app/tarifs/layout.js

export const metadata = {
  title: "Tarifs & Remboursements Mutuelle ⭐ Ostéopathe Sèvres & Paris 15",
  description:
    "Consultez les tarifs d'ostéopathie (adulte, nourrisson, grossesse) et drainage Renata França à Sèvres et Paris 15. Séances remboursées par la majorité des mutuelles.",
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr/tarifs",
  },
  openGraph: {
    title: "Tarifs Ostéopathie & Drainage Renata França - Hilary Farid DO",
    description:
      "Tarifs clairs et informations sur le remboursement mutuelle de vos séances d'ostéopathie à Sèvres et Paris 15.",
    url: "https://www.hilaryfarid-osteopathe.fr/tarifs",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function TarifsLayout({ children }) {
  return <>{children}</>;
}
