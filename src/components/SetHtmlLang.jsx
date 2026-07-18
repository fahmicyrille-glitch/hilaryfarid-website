"use client";

import { useEffect } from "react";

/**
 * Le layout racine ne peut définir <html lang="..."> qu'une seule fois.
 * Ce composant corrige l'attribut côté client pour les sous-arbres dans
 * une autre langue (ex. /en/*), sans dupliquer <html>/<body>.
 */
export default function SetHtmlLang({ lang }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [lang]);

  return null;
}
