export const metadata = {
  title: "Ostéopathie Femme Enceinte & Post-partum",
  description:
    "Ostéopathe spécialisée grossesse à Paris 15 et Sèvres : lombalgies, sciatique, bassin, préparation à l'accouchement et post-partum. Formation CFPCO.",
  alternates: {
    canonical:
      "https://www.hilaryfarid-osteopathe.fr/osteopathie/femme-enceinte",
  },
  openGraph: {
    title: "Ostéopathie Grossesse & Post-partum – Paris 15 & Sèvres | Hilary Farid",
    description:
      "Accompagnement ostéopathique pendant la grossesse et après l'accouchement. Douleurs du bassin, sciatique, préparation à l'accouchement. Formation CFPCO.",
    url: "https://www.hilaryfarid-osteopathe.fr/osteopathie/femme-enceinte",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function FemmeEnceinteLay({ children }) {
  return <>{children}</>;
}
