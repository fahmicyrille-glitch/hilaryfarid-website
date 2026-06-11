export const metadata = {
  title: "Ostéopathie Nourrisson Sèvres & Paris 15",
  description:
    "Ostéopathe spécialisée nourrisson à Paris 15 et Sèvres : coliques, reflux, plagiocéphalie, freins restrictifs, torticolis. Techniques ultra-douces.",
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr/osteopathie/nourrisson",
  },
  openGraph: {
    title: "Ostéopathie Nourrisson & Bébé – Paris 15 & Sèvres | Hilary Farid",
    description:
      "Consultations d'ostéopathie pour nourrissons : coliques, reflux, plagiocéphalie, freins restrictifs, torticolis. Spécialiste formée Centre YGY.",
    url: "https://www.hilaryfarid-osteopathe.fr/osteopathie/nourrisson",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function NourrissonLayout({ children }) {
  return <>{children}</>;
}
