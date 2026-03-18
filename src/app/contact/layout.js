// src/app/contact/layout.js

export const metadata = {
  title: "Contact & RDV Ostéopathe ⭐ Sèvres (92310) & Paris 15 (75015)",
  description:
    "Prenez rendez-vous en ligne avec Hilary Farid, Ostéopathe D.O. à Sèvres et Paris 15. Horaires, accès (Métro/Tram) et formulaire de contact direct.",
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr/contact",
  },
  openGraph: {
    title: "Prendre RDV avec Hilary Farid | Ostéopathe Sèvres & Paris 15",
    description:
      "Trouvez toutes les informations pratiques : accès, horaires et contact direct pour vos séances d'ostéopathie et drainage Renata França.",
    url: "https://www.hilaryfarid-osteopathe.fr/contact",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
