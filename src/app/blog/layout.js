export const metadata = {
  title: "Blog Ostéopathie & Drainage Renata França",
  description:
    "Conseils sur l'ostéopathie nourrisson, la grossesse et le drainage Renata França, par Hilary Farid, ostéopathe D.O. à Sèvres et Paris 15.",
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr/blog",
  },
  openGraph: {
    title: "Blog — Hilary Farid Ostéopathe D.O.",
    description:
      "Conseils et articles sur l'ostéopathie, le drainage Renata França et la santé de votre famille.",
    url: "https://www.hilaryfarid-osteopathe.fr/blog",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
