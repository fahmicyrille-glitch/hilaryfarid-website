// src/app/en/politique-confidentialite/layout.js

import { hreflangForEn } from "@/config/i18n";

export const metadata = {
  title: "Privacy Policy",
  description: "Information on the protection of your personal data and the use of cookies on Hilary Farid's website.",
  alternates: hreflangForEn("/en/politique-confidentialite"),
  robots: {
    index: false, // We don't want this page to rank first on Google
    follow: true,
  },
};

export default function PolitiqueEnLayout({ children }) {
  return <>{children}</>;
}
