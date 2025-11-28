"use client";

export default function SEO({
  title,
  description,
  canonical = "",
  image = "/og-image.webp",
}) {
  const fullCanonical = canonical.startsWith("http")
    ? canonical
    : `https://www.hilaryfarid-osteopathe.fr${canonical}`;

  return (
    <>
      {/* TITLE */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}

      {/* CANONICAL */}
      {canonical && <link rel="canonical" href={fullCanonical} />}

      {/* OPEN GRAPH */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullCanonical} />
      <meta
        property="og:site_name"
        content="Hilary Farid – Ostéopathe DO à Sèvres & Paris 15"
      />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* SEO LOCAL (mots-clés) */}
      <meta
        name="keywords"
        content="ostéopathe Sèvres, ostéopathe Paris 15, ostéopathie nourrisson, ostéopathie femme enceinte, ostéopathie sportif, drainage lymphatique Renata França"
      />
    </>
  );
}
