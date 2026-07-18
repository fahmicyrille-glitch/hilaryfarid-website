import { hreflangFor } from "@/config/i18n";

export const metadata = {
  title: { absolute: "Freins Restrictifs Nourrisson : Ostéopathie & Frénectomie" },
  description:
    "Frein de langue ou de lèvre : l'ostéopathie accompagne votre bébé avant et après la frénectomie. Allaitement difficile, succion. Sèvres & Paris 15.",
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr/osteopathie/freins-restrictifs",
    ...hreflangFor("/osteopathie/freins-restrictifs"),
  },
  openGraph: {
    title: "Freins Restrictifs du Nourrisson — Ostéopathie | Hilary Farid D.O.",
    description:
      "Ostéopathe spécialisée dans la prise en charge des freins restrictifs à Paris 15 et Sèvres. Frein lingual, labial : accompagnement avant et après frénectomie.",
    url: "https://www.hilaryfarid-osteopathe.fr/osteopathie/freins-restrictifs",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function FreinsRestrictifsLayout({ children }) {
  return <>{children}</>;
}
