"use client";

import dynamic from "next/dynamic";

// Charge framer-motion uniquement côté client
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

/**
 * FadeInS (Safe)
 * ➜ AUCUN déplacement (0px)
 * ➜ Animation 100% safe CLS
 */
export function FadeIn({ children, delay = 0 }) {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      style={{ willChange: "opacity" }}
    >
      {children}
    </MotionDiv>
  );
}

/**
 * SlideUp (Safe)
 * ➜ y supprimé → remplacé par un léger blur
 * ➜ CLS = zéro
 */
export function SlideUp({ children, delay = 0 }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, filter: "blur(6px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      style={{ willChange: "opacity, filter" }}
    >
      {children}
    </MotionDiv>
  );
}

/**
 * HeroMotion (Safe)
 * ❗ IMPORTANT :
 * ➜ scale supprimé (il casse le LCP)
 * ➜ y supprimé
 * ➜ animation uniquement sur l’opacité
 */
export function HeroMotion({ children }) {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ willChange: "opacity" }}
    >
      {children}
    </MotionDiv>
  );
}
