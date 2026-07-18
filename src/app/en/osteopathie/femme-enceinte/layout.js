import { hreflangForEn } from "@/config/i18n";

export const metadata = {
  title: "Osteopathy for Pregnancy & Post-partum",
  description:
    "Osteopath specialised in pregnancy in Paris 15 and Sèvres: lower back pain, sciatica, pelvic pain, birth preparation and post-partum. CFPCO trained. English spoken.",
  alternates: hreflangForEn("/en/osteopathie/femme-enceinte"),
  openGraph: {
    title: "Osteopathy for Pregnancy & Post-partum – Paris 15 & Sèvres | Hilary Farid",
    description:
      "Osteopathic support during pregnancy and after birth. Pelvic pain, sciatica, birth preparation. CFPCO trained.",
    url: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/femme-enceinte",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function FemmeEnceinteEnLayout({ children }) {
  return <>{children}</>;
}
