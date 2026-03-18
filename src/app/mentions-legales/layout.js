// src/app/mentions-legales/layout.js

export const metadata = {
  title: "Mentions Légales | Hilary Farid – Ostéopathe",
  description: "Mentions légales du site hilaryfarid-osteopathe.fr",
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesLayout({ children }) {
  return <>{children}</>;
}
