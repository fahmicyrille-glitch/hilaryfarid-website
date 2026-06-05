// src/app/sitemap.js
export default function sitemap() {
  const baseUrl = "https://www.hilaryfarid-osteopathe.fr";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: "2025-06-01",
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/osteopathie`,
      lastModified: "2025-05-01",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/drainage`,
      lastModified: "2025-05-01",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sevres`,
      lastModified: "2025-06-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/paris15`,
      lastModified: "2025-06-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/temoignages`,
      lastModified: "2025-06-01",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: "2025-04-01",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: "2025-01-01",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2025-01-01",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/osteopathie/nourrisson`,
      lastModified: "2025-06-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/osteopathie/femme-enceinte`,
      lastModified: "2025-06-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/osteopathie/sport`,
      lastModified: "2025-06-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/drainage/bienfaits`,
      lastModified: "2025-06-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: "2025-01-01",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: "2025-01-01",
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
