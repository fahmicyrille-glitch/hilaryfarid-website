// src/app/en/mentions-legales/layout.js

import { hreflangForEn } from "@/config/i18n";

export const metadata = {
  title: "Legal Notice",
  description:
    "Legal notice for hilaryfarid-osteopathe.fr: publisher, hosting provider, intellectual property and liability.",
  alternates: hreflangForEn("/en/mentions-legales"),
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesEnLayout({ children }) {
  return <>{children}</>;
}
