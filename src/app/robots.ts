// src/app/robots.ts

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: [
          "/api/",
          "/admin",
          "/dashboard",
          "/private/",
          "/draft/",
          "/temp/",
          "/old/",
        ],
        // /api/google-reviews est plus spécifique que /api/ → Google l'autorise
        allow: ["/_next/", "/api/google-reviews"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Mobile",
        allow: "/",
      },
      {
        userAgent: "Google-InspectionTool",
        allow: "/",
      },
      {
        userAgent: "DoctolibBot",
        allow: "/",
      },
    ],
    sitemap: "https://www.hilaryfarid-osteopathe.fr/sitemap.xml",
  };
}
