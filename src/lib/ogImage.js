// Générateur d'image OG partagé — utilisé par les fichiers opengraph-image.js
// de chaque page thématique pour remplacer l'image générique /og-image.webp.

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

// Runtime edge obligatoire : la police par défaut de @vercel/og (bundlée
// dans next/server pour le runtime node) plante sur Windows (bug de
// résolution de chemin file:// dans cette version de Next).
//
// Les .woff2 locales du site ne conviennent pas non plus : le moteur de
// rendu de police embarqué (opentype.js) ne sait pas lire le woff2
// ("Unsupported OpenType signature wOF2"), seulement le ttf/otf/woff.
// On récupère donc la version ttf de Roboto directement depuis Google
// Fonts (même famille que le site) en forçant un vieux user-agent, qui
// fait servir du ttf par l'API Google Fonts au lieu du woff2 par défaut.
let cachedFonts = null;
export async function getOgFonts() {
  if (cachedFonts) return cachedFonts;
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap",
    { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.9.7 Safari/534.34" } }
  ).then((res) => res.text());
  const ttfUrl = css.match(/src: url\(([^)]+)\) format\('truetype'\)/)?.[1];
  const bold = await fetch(ttfUrl).then((res) => res.arrayBuffer());
  cachedFonts = [{ name: "Roboto", data: bold, style: "normal", weight: 700 }];
  return cachedFonts;
}

export function buildOgImageElement({ eyebrow, title }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#FFFBF7",
        backgroundImage:
          "radial-gradient(circle at 85% 15%, rgba(158,140,127,0.28) 0%, rgba(255,251,247,0) 55%)",
        padding: "72px 88px",
        fontFamily: "Roboto",
      }}
    >
      <div style={{ display: "flex", width: "10px", height: "64px", backgroundColor: "#7B5A3E", position: "absolute", left: 0, top: 72 }} />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            color: "#7B5A3E",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            color: "#7A685B",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          {title}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", color: "#7A685B", fontSize: 34, fontWeight: 700 }}>
          Hilary Farid
        </div>
        <div style={{ display: "flex", color: "#6B645F", fontSize: 26, marginTop: 4 }}>
          Ostéopathe D.O. — Sèvres &amp; Paris 15
        </div>
      </div>
    </div>
  );
}
