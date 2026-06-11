// src/app/mentions-legales/layout.js

export const metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site hilaryfarid-osteopathe.fr : éditeur, hébergeur, propriété intellectuelle et responsabilité.",
  alternates: {
    canonical: "https://www.hilaryfarid-osteopathe.fr/mentions-legales",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesLayout({ children }) {
  return <>{children}</>;
}
