// src/app/sitemap.js
export default function sitemap() {
  const baseUrl = "https://www.hilaryfarid-osteopathe.fr";
  // On utilise la date du jour pour booster la "fraîcheur" SEO
  const lastMod = new Date().toISOString().split('T')[0];

  return [
    {
      url: `${baseUrl}/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/osteopathie`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.9, // Augmenté pour souligner le service phare
    },
    {
      url: `${baseUrl}/drainage`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sevres`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.8, // Augmenté pour le SEO local
    },
    {
      url: `${baseUrl}/paris15`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.8, // Augmenté pour le SEO local
    },
    {
      url: `${baseUrl}/temoignages`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
