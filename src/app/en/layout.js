// src/app/en/layout.js
// Layout imbriqué pour la version anglaise du site (Phase 1).
// Le layout racine (src/app/layout.js) définit déjà <html>/<body>, GTM,
// Chatbase, BookingModal, Header/Footer etc. — on ne fait ici que corriger
// l'attribut de langue et fournir des métadonnées par défaut pour /en/*.

import SetHtmlLang from "@/components/SetHtmlLang";

export const metadata = {
  title: {
    default: "Hilary Farid – Osteopath D.O. in Sèvres & Paris 15",
    template: "%s | Hilary Farid",
  },
  description:
    "Hilary Farid, Osteopath D.O. in Sèvres and Paris 15, near Paris. Gentle osteopathy for adults, infants, pregnant women and athletes. English spoken. Renata França lymphatic drainage.",
};

export default function EnglishLayout({ children }) {
  return (
    <>
      <SetHtmlLang lang="en" />
      {children}
    </>
  );
}
