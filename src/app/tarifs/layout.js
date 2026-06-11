// src/app/tarifs/layout.js

export const metadata = {
  title: "Tarifs Ostéopathie & Drainage ⭐ Sèvres & Paris 15",
  description:
    "Tarifs des consultations d'ostéopathie (adulte, nourrisson, grossesse) et du drainage Renata França à Sèvres et Paris 15. Remboursement mutuelles.",
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
