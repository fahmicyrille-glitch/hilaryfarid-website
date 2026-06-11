// src/lib/googleReviews.js
// Récupération des avis Google des DEUX cabinets (Sèvres + Paris 15).
// Utilisé par l'API /api/google-reviews ET par la page d'accueil (server).
//
// Variables d'environnement attendues (.env.local) :
//   GOOGLE_PLACES_API_KEY      → clé API Google Places
//   GOOGLE_PLACE_ID_SEVRES     → Place ID du cabinet de Sèvres
//   GOOGLE_PLACE_ID_PARIS15    → Place ID du cabinet Paris 15
//   GOOGLE_PLACE_ID            → (legacy) utilisé en secours si les deux ci-dessus manquent

const REVALIDATE_SECONDS = 21600; // 6h — les avis bougent peu

const getPlaces = () => {
  const places = [];
  if (process.env.GOOGLE_PLACE_ID_SEVRES) {
    places.push({ key: "sevres", label: "Sèvres", placeId: process.env.GOOGLE_PLACE_ID_SEVRES });
  }
  if (process.env.GOOGLE_PLACE_ID_PARIS15) {
    places.push({ key: "paris15", label: "Paris 15", placeId: process.env.GOOGLE_PLACE_ID_PARIS15 });
  }
  if (places.length === 0 && process.env.GOOGLE_PLACE_ID) {
    places.push({ key: "sevres", label: "Sèvres", placeId: process.env.GOOGLE_PLACE_ID });
  }
  return places;
};

async function fetchPlace(apiKey, { key, label, placeId }) {
  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${placeId}` +
    `&fields=reviews,url,rating,user_ratings_total` +
    `&language=fr&reviews_sort=newest&key=${apiKey}`;

  const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
  if (!res.ok) throw new Error(`Google Places HTTP ${res.status}`);
  const data = await res.json();
  if (data.status !== "OK") throw new Error(`Google Places status ${data.status}`);

  const googleUrl = data.result?.url ?? null;

  return {
    cabinet: key,
    cabinetLabel: label,
    rating: data.result?.rating ?? null,
    total: data.result?.user_ratings_total ?? 0,
    url: googleUrl,
    reviews: (data.result?.reviews || []).map((r) => ({
      author: r.author_name,
      text: r.text,
      rating: r.rating,
      time: r.time,
      relativeTime: r.relative_time_description ?? null,
      sourceUrl: googleUrl,
      cabinet: key,
      cabinetLabel: label,
    })),
  };
}

/**
 * Retourne { reviews, stats } :
 *  - reviews : avis des deux cabinets fusionnés, du plus récent au plus ancien
 *  - stats   : { rating, total, byCabinet } ou null si non configuré
 * Ne lève jamais : en cas d'erreur/config manquante → { reviews: [], stats: null }.
 */
export async function fetchGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const places = getPlaces();
  if (!apiKey || places.length === 0) return { reviews: [], stats: null };

  const results = await Promise.allSettled(places.map((p) => fetchPlace(apiKey, p)));
  const ok = results
    .filter((r) => r.status === "fulfilled")
    .map((r) => r.value);

  if (ok.length === 0) return { reviews: [], stats: null };

  const reviews = ok
    .flatMap((p) => p.reviews)
    .filter((r) => r.text && r.rating >= 4)
    .sort((a, b) => b.time - a.time);

  const total = ok.reduce((sum, p) => sum + (p.total || 0), 0);
  const rating =
    total > 0
      ? ok.reduce((sum, p) => sum + (p.rating || 0) * (p.total || 0), 0) / total
      : null;

  return {
    reviews,
    stats: {
      rating: rating ? Math.round(rating * 10) / 10 : null,
      total,
      byCabinet: Object.fromEntries(
        ok.map((p) => [p.cabinet, { rating: p.rating, total: p.total, url: p.url }])
      ),
    },
  };
}
