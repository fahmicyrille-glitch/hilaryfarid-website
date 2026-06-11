"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Révélation au scroll (IntersectionObserver) — les sections apparaissent
 * au moment où on les découvre, pas au chargement de la page.
 * - styles dans globals.css (.reveal*) + filet <noscript> dans layout.js
 * - se déclenche une seule fois, ~12% avant le bas du viewport
 * - transform/opacity/filter uniquement → zéro layout shift (CLS = 0)
 * - prefers-reduced-motion géré en CSS
 */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function RevealBase({ children, delay = 0, variant = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${variant} ${visible ? "reveal-visible" : ""}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

/** FadeIn — fondu + légère montée au scroll */
export function FadeIn({ children, delay = 0 }) {
  return <RevealBase delay={delay}>{children}</RevealBase>;
}

/** SlideUp — montée + défloutage (effet signature premium) */
export function SlideUp({ children, delay = 0 }) {
  return (
    <RevealBase delay={delay} variant="reveal-blur">
      {children}
    </RevealBase>
  );
}

/**
 * HeroMotion — CSS pure, visible dès le 1er frame (LCP-safe).
 * Ne PAS observer : le hero doit apparaître immédiatement.
 */
export function HeroMotion({ children }) {
  return <div className="fade-hero">{children}</div>;
}

/** FadeInNoShift — fondu pur au scroll (sans translation) */
export function FadeInNoShift({ children, delay = 0 }) {
  return (
    <RevealBase delay={delay} variant="reveal-flat">
      {children}
    </RevealBase>
  );
}
