// src/app/robots.ts

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: [
          "/admin",
          "/dashboard",
          "/private/",
          "/draft/",
          "/temp/",
          "/old/",
          "/api/",
        ],
        allow: "/_next/",
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
