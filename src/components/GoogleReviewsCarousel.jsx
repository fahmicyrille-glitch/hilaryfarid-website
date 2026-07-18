"use client";

import { useRef, useState, useEffect, useCallback, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { IconGoogle, IconMapPin, IconExternalLink } from "@/components/icons/UiIcons";

const AVATAR_COLORS = [
  "bg-primary/15 text-primary",
  "bg-secondary/15 text-secondary",
  "bg-doctolib/10 text-doctolib",
  "bg-cream-border/60 text-secondary",
];

const initials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

function Stars({ rating = 5, isEn = false }) {
  return (
    <div className="flex text-amber-400 text-sm" aria-label={isEn ? `${rating} out of 5 stars` : `${rating} étoiles sur 5`}>
      {"★★★★★".slice(0, Math.round(rating))}
      <span className="text-graywarm/30">{"★★★★★".slice(Math.round(rating))}</span>
    </div>
  );
}

/**
 * Carrousel d'avis Google (2 cabinets fusionnés).
 * `reviews` vient du serveur ; si vide, `fallback` (avis patients manuels) est affiché
 * sans aucun branding Google.
 */
export default function GoogleReviewsCarousel({ reviews = [], fallback = [] }) {
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en") ?? false;
  const isGoogle = reviews.length > 0;
  const items = isGoogle ? reviews : fallback;
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  // Flèches et auto-défilement seulement s'il y a réellement du contenu à
  // faire défiler (ex. 3 avis tiennent entièrement dans le cadre desktop)
  const [canScroll, setCanScroll] = useState(false);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const check = () => setCanScroll(track.scrollWidth > track.clientWidth + 8);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(track);
    return () => ro.disconnect();
  }, [items.length]);

  const scrollByCard = useCallback((dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const step = card ? card.offsetWidth + 20 : 340;
    const atEnd =
      dir > 0 && track.scrollLeft + track.clientWidth >= track.scrollWidth - step / 2;
    if (atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: dir * step, behavior: "smooth" });
    }
  }, []);

  // Défilement automatique doux, en pause au survol/toucher
  useEffect(() => {
    if (paused || !canScroll) return;
    const interval = setInterval(() => scrollByCard(1), 5000);
    return () => clearInterval(interval);
  }, [paused, canScroll, scrollByCard]);

  if (items.length === 0) return null;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div className="relative">
        {/* Piste scrollable */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((r, i) => (
            <article
              key={`${r.author || r.name}-${i}`}
              className="snap-start shrink-0 w-[85%] sm:w-[46%] lg:w-[31%] bg-white rounded-2xl border border-light/70 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                    AVATAR_COLORS[i % AVATAR_COLORS.length]
                  }`}
                >
                  {initials(r.author || r.name)}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-primary text-sm truncate">
                    {r.author || r.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <Stars rating={r.rating ?? 5} isEn={isEn} />
                    {r.relativeTime && (
                      <span className="text-[11px] text-graywarm">{r.relativeTime}</span>
                    )}
                  </div>
                </div>
                {isGoogle && (
                  <span className="ml-auto text-graywarm/70" title={isEn ? "Google review" : "Avis Google"}>
                    <IconGoogle className="w-4 h-4" />
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm text-graywarm leading-relaxed flex-grow line-clamp-5">
                “{r.text}”
              </p>

              <div className="mt-4 pt-3 border-t border-light/60 flex items-center justify-between text-xs">
                {r.cabinetLabel ? (
                  <span className="inline-flex items-center gap-1 text-graywarm font-medium">
                    <IconMapPin className="w-3.5 h-3.5" /> {r.cabinetLabel}
                  </span>
                ) : (
                  <span className="text-graywarm font-medium">{r.context || (isEn ? "Patient review" : "Avis patient")}</span>
                )}
                {isGoogle && r.sourceUrl && (
                  <a
                    href={r.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-doctolib font-semibold hover:underline underline-offset-2"
                  >
                    {isEn ? "See on Google" : "Voir sur Google"} <IconExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Flèches — uniquement si le contenu déborde du cadre */}
        {canScroll && (
          <>
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label={isEn ? "Previous reviews" : "Avis précédents"}
              className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-light shadow-md items-center justify-center text-primary hover:bg-light transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label={isEn ? "Next reviews" : "Avis suivants"}
              className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-light shadow-md items-center justify-center text-primary hover:bg-light transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
