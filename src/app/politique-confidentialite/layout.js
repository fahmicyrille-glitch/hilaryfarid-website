// src/app/politique-confidentialite/layout.js

export const metadata = {
  title: "Politique de Confidentialité | Hilary Farid",
  description: "Informations sur la protection de vos données personnelles et l'utilisation des cookies sur le site d'Hilary Farid.",
  robots: {
    index: false, // On ne veut pas que cette page apparaisse en premier sur Google
    follow: true,
  },
};

export default function PolitiqueLayout({ children }) {
  return <>{children}</>;
}
