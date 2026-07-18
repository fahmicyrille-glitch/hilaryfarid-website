// src/config/i18n.js
// Correspondance des chemins FR <-> EN pour le sélecteur de langue et les hreflang.
// Phase 2 : couverture complète, toutes les pages FR ont désormais un équivalent EN.

export const FR_TO_EN = {
  "/": "/en",
  "/drainage": "/en/drainage",
  "/drainage/bienfaits": "/en/drainage/bienfaits",
  "/tarifs": "/en/tarifs",
  "/contact": "/en/contact",
  "/sevres": "/en/sevres",
  "/paris15": "/en/paris15",
  "/a-propos": "/en/a-propos",
  "/temoignages": "/en/temoignages",
  "/blog": "/en/blog",
  "/carte-cadeau": "/en/carte-cadeau",
  "/visio": "/en/visio",
  "/mentions-legales": "/en/mentions-legales",
  "/politique-confidentialite": "/en/politique-confidentialite",
  "/osteopathie": "/en/osteopathie",
  "/osteopathie/femme-enceinte": "/en/osteopathie/femme-enceinte",
  "/osteopathie/freins-restrictifs": "/en/osteopathie/freins-restrictifs",
  "/osteopathie/nourrisson": "/en/osteopathie/nourrisson",
  "/osteopathie/plagiocephalie": "/en/osteopathie/plagiocephalie",
  "/osteopathie/sport": "/en/osteopathie/sport",
  "/blog/freins-restrictifs-nourrisson": "/en/blog/freins-restrictifs-nourrisson",
  "/blog/plagiocephalie-nourrisson-osteopathe": "/en/blog/plagiocephalie-nourrisson-osteopathe",
  "/blog/drainage-renata-franca-methode": "/en/blog/drainage-renata-franca-methode",
  "/blog/coliques-nourrisson-osteopathie": "/en/blog/coliques-nourrisson-osteopathie",
  "/blog/osteopathie-femme-enceinte-grossesse": "/en/blog/osteopathie-femme-enceinte-grossesse",
};

export const EN_TO_FR = Object.fromEntries(
  Object.entries(FR_TO_EN).map(([fr, en]) => [en, fr])
);

export const SITE_URL = "https://www.hilaryfarid-osteopathe.fr";

/** Retourne l'URL absolue de la page équivalente dans l'autre langue, ou null si aucune traduction n'existe encore. */
export function getAlternatePath(pathname) {
  if (pathname.startsWith("/en")) {
    return EN_TO_FR[pathname] ?? null;
  }
  return FR_TO_EN[pathname] ?? null;
}

/** Construit l'objet `alternates.languages` pour les metadata Next.js d'une page FR qui a un équivalent EN. */
export function hreflangFor(pathnameFr) {
  const en = FR_TO_EN[pathnameFr];
  if (!en) return undefined;
  return {
    languages: {
      "fr-FR": `${SITE_URL}${pathnameFr}`,
      "en-US": `${SITE_URL}${en}`,
      "x-default": `${SITE_URL}${pathnameFr}`,
    },
  };
}

/** Idem pour une page EN. */
export function hreflangForEn(pathnameEn) {
  const fr = EN_TO_FR[pathnameEn];
  if (!fr) return undefined;
  return {
    languages: {
      "fr-FR": `${SITE_URL}${fr}`,
      "en-US": `${SITE_URL}${pathnameEn}`,
      "x-default": `${SITE_URL}${fr}`,
    },
  };
}
