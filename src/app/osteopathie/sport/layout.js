export const metadata = {
  title: "Ostéopathie du Sport Sèvres & Paris 15 | Hilary Farid D.O.",
  description:
    "Ostéopathe du sport à Paris 15 et Sèvres. Récupération, prévention des blessures, tendinites, entorses, douleurs lombaires du sportif. Pour amateurs et compétiteurs. RDV Doctolib.",
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr/osteopathie/sport",
  },
  openGraph: {
    title: "Ostéopathie du Sport – Paris 15 & Sèvres | Hilary Farid",
    description:
      "Ostéopathie dédiée aux sportifs : prévention, récupération, traitement des blessures. Tendinites, entorses, dos du sportif. Cabinets Paris 15 et Sèvres.",
    url: "https://www.hilaryfarid-osteopathe.fr/osteopathie/sport",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function SportLayout({ children }) {
  return <>{children}</>;
}
