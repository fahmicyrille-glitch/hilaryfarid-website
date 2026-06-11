// scripts/audit.mjs — audit SEO/a11y des pages rendues (localhost:3001)
const BASE = "http://localhost:3001";
const PAGES = [
  "/", "/osteopathie", "/osteopathie/nourrisson", "/osteopathie/freins-restrictifs",
  "/osteopathie/plagiocephalie", "/osteopathie/femme-enceinte", "/osteopathie/sport",
  "/drainage", "/drainage/bienfaits", "/carte-cadeau", "/tarifs", "/sevres", "/paris15",
  "/temoignages", "/a-propos", "/contact", "/blog",
  "/blog/freins-restrictifs-nourrisson", "/blog/plagiocephalie-nourrisson-osteopathe",
  "/blog/drainage-renata-franca-methode", "/blog/coliques-nourrisson-osteopathie",
  "/blog/osteopathie-femme-enceinte-grossesse",
  "/mentions-legales", "/politique-confidentialite", "/visio",
];

const get = (re, s) => (s.match(re) || [])[1] || null;

for (const p of PAGES) {
  const issues = [];
  let html;
  try {
    const res = await fetch(BASE + p);
    if (res.status !== 200) { console.log(`${p} → HTTP ${res.status}`); continue; }
    html = await res.text();
  } catch (e) { console.log(`${p} → FETCH FAIL ${e.message}`); continue; }

  const title = get(/<title>([^<]*)<\/title>/, html);
  if (!title) issues.push("PAS DE TITLE");
  else if (title.length > 65) issues.push(`title long (${title.length}): ${title}`);

  const desc = get(/<meta name="description" content="([^"]*)"/, html);
  if (!desc) issues.push("PAS DE META DESCRIPTION");
  else if (desc.length > 165) issues.push(`description longue (${desc.length})`);
  else if (desc.length < 70) issues.push(`description courte (${desc.length})`);

  const canonical = get(/<link rel="canonical" href="([^"]*)"/, html);
  const expected = `https://www.hilaryfarid-osteopathe.fr${p === "/" ? "" : p}`;
  if (!canonical) issues.push("PAS DE CANONICAL");
  else if (canonical.replace(/\/$/, "") !== expected.replace(/\/$/, ""))
    issues.push(`CANONICAL INCORRECT: ${canonical}`);

  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) issues.push(`${h1s} balises h1`);

  const ogTitle = /property="og:title"/.test(html);
  if (!ogTitle) issues.push("pas d'og:title");

  // JSON-LD valide ?
  const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
  for (const [, raw] of ldBlocks) {
    try { JSON.parse(raw); } catch { issues.push("JSON-LD INVALIDE"); }
  }
  if (ldBlocks.length === 0 && !["/mentions-legales", "/politique-confidentialite", "/visio"].includes(p))
    issues.push("aucun JSON-LD");

  // images sans alt
  const noAlt = [...html.matchAll(/<img(?![^>]*\balt=)[^>]*>/g)].length;
  if (noAlt > 0) issues.push(`${noAlt} <img> sans alt`);

  // noindex inattendu
  if (/noindex/.test(html) && p !== "/visio") issues.push("NOINDEX détecté");

  console.log(`${p} → ${issues.length === 0 ? "OK" : issues.join(" | ")}`);
}
