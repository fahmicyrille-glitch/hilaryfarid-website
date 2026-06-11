export const metadata = {
  title: "Conseil Anti-Douleur en Visio ⭐ Ergonomie & Posture",
  description:
    "Consultation en visio avec Hilary Farid, ostéopathe D.O. : posture en télétravail, conseils post-partum et exercices d'auto-soulagement.",
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr/visio",
  },
  openGraph: {
    title: "Conseil en ergonomie et prévention à distance | Hilary Farid",
    description:
      "Soulagez vos douleurs sans vous déplacer. Une session de 30 min en vidéo pour analyser votre environnement et apprendre les bons gestes.",
    url: "https://www.hilaryfarid-osteopathe.fr/visio",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function VisioLayout({ children }) {
  return <>{children}</>;
}
