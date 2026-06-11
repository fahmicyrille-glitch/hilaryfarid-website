// src/app/a-propos/layout.js

export const metadata = {
  title: { absolute: "Hilary Farid ⭐ Ostéopathe D.O. Périnatalité & Drainage" },
  description:
    "Hilary Farid, ostéopathe D.O. à Sèvres et Paris 15 : parcours, formations, expertise nourrisson (freins de langue), grossesse et méthode Renata França.",
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr/a-propos",
  },
  openGraph: {
    title: "À propos de Hilary Farid | Ostéopathe D.O. Sèvres & Paris 15",
    description:
      "Parcours, formations et expertises d'Hilary Farid. Une prise en charge globale et douce pour toute la famille, du nourrisson au sportif.",
    url: "https://www.hilaryfarid-osteopathe.fr/a-propos",
    images: [
      {
        url: "/hilary.webp",
        width: 1200,
        height: 630,
        alt: "Hilary Farid, Ostéopathe D.O. à Sèvres et Paris 15",
      },
    ],
    type: "profile",
  },
};

export default function AProposLayout({ children }) {
  return <>{children}</>;
}
