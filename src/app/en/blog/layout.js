import { hreflangForEn } from "@/config/i18n";

export const metadata = {
  title: "Blog — Osteopathy & Renata França Drainage",
  description:
    "Advice on infant osteopathy, pregnancy and Renata França drainage, by Hilary Farid, Osteopath D.O. in Sèvres and Paris 15.",
  alternates: hreflangForEn("/en/blog"),
  openGraph: {
    title: "Blog — Hilary Farid Osteopath D.O.",
    description:
      "Advice and articles on osteopathy, Renata França drainage and your family's health.",
    url: "https://www.hilaryfarid-osteopathe.fr/en/blog",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function BlogEnLayout({ children }) {
  return <>{children}</>;
}
