// src/config/siteConfig.js
// Source unique de vérité pour les données SEO & schémas

export const SITE_URL = "https://www.hilaryfarid-osteopathe.fr";
export const PERSON_ID = `${SITE_URL}/#hilary-farid`;
export const SEVRES_ID = `${SITE_URL}/#cabinet-sevres`;
export const PARIS15_ID = `${SITE_URL}/#cabinet-paris15`;

// Horaires réels par cabinet (confirmés sur Google My Business 2026-06-15)
export const OPENING_HOURS_SEVRES = [
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday",    opens: "12:00", closes: "20:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "15:00", closes: "20:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday",    opens: "09:00", closes: "20:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday",  opens: "10:00", closes: "13:00" },
];

export const OPENING_HOURS_PARIS15 = [
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday",    opens: "12:00", closes: "20:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday",   opens: "12:00", closes: "17:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday",  opens: "14:45", closes: "19:45" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday",    opens: "09:00", closes: "20:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday",  opens: "10:00", closes: "13:00" },
];

// Alias rétrocompat (Sèvres était l'unique valeur avant)
export const OPENING_HOURS = OPENING_HOURS_SEVRES;

export const RENATA_OFFICIAL_URL = "https://renatafranca.com";

// Chiffres d'avis — mis à jour le 2026-07-08 depuis l'API Google Places
// (source de vérité manuelle : à rafraîchir périodiquement si l'API est indisponible)
export const SEVRES_RATING  = { ratingValue: "4.9", reviewCount: "59" };
export const PARIS15_RATING = { ratingValue: "5", reviewCount: "13" };
export const GLOBAL_REVIEW_COUNT = "72"; // total combiné affiché en page d'accueil
export const GLOBAL_REVIEW_RATING = "4.9"; // note combinée affichée en page d'accueil

// Horaires affichables (texte, pour le footer)
export const HOURS_DISPLAY_SEVRES = [
  { day: "Lundi",    hours: "12h – 20h" },
  { day: "Mardi",    hours: "Fermé" },
  { day: "Mercredi", hours: "15h – 20h" },
  { day: "Jeudi",    hours: "Fermé" },
  { day: "Vendredi", hours: "9h – 20h" },
  { day: "Samedi",   hours: "10h – 13h" },
];

export const HOURS_DISPLAY_PARIS15 = [
  { day: "Lundi",    hours: "12h – 20h" },
  { day: "Mardi",    hours: "12h – 17h" },
  { day: "Mercredi", hours: "Fermé" },
  { day: "Jeudi",    hours: "14h45 – 19h45" },
  { day: "Vendredi", hours: "9h – 20h" },
  { day: "Samedi",   hours: "10h – 13h" },
];
