// src/config/siteConfig.js
// Source unique de vérité pour les données SEO & schémas

export const SITE_URL = "https://www.hilaryfarid-osteopathe.fr";
export const PERSON_ID = `${SITE_URL}/#hilary-farid`;
export const SEVRES_ID = `${SITE_URL}/#cabinet-sevres`;
export const PARIS15_ID = `${SITE_URL}/#cabinet-paris15`;

// Horaires réels – seuls les jours d'ouverture sont listés
export const OPENING_HOURS = [
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday",    opens: "12:00", closes: "20:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "15:00", closes: "20:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday",    opens: "09:00", closes: "20:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday",  opens: "10:00", closes: "13:00" },
];

export const RENATA_OFFICIAL_URL = "https://renatafranca.com";

// Chiffres d'avis — à mettre à jour lors de chaque palier significatif
export const SEVRES_RATING  = { ratingValue: "5", reviewCount: "62" };
export const PARIS15_RATING = { ratingValue: "5", reviewCount: "62" };
export const GLOBAL_REVIEW_COUNT = "100"; // total combiné affiché en page d'accueil
