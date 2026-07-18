// src/app/en/visio/layout.js

import { hreflangForEn } from "@/config/i18n";

export const metadata = {
  title: "Pain-Relief Video Consultation ⭐ Ergonomics & Posture",
  description:
    "Video consultation with Hilary Farid, Osteopath D.O.: remote-work posture, post-partum advice and self-relief exercises. English spoken.",
  alternates: hreflangForEn("/en/visio"),
  openGraph: {
    title: "Remote Ergonomics & Prevention Advice | Hilary Farid",
    description:
      "Relieve your pain without leaving home. A 30-minute video session to assess your environment and learn the right movements.",
    url: "https://www.hilaryfarid-osteopathe.fr/en/visio",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function VisioEnLayout({ children }) {
  return <>{children}</>;
}
