"use client";

import dynamic from "next/dynamic";

// On charge framer-motion uniquement côté client
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

/**
 * FadeIn
 * Apparition douce avec légère translation vers le haut
 */
export function FadeIn({ children, delay = 0 }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </MotionDiv>
  );
}

/**
 * SlideUp
 * Idem mais un peu plus marqué sur l’axe Y
 */
export function SlideUp({ children, delay = 0 }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </MotionDiv>
  );
}

/**
 * HeroMotion
 * Animation spécifique pour les blocs “hero”
 */
export function HeroMotion({ children }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
    >
      {children}
    </MotionDiv>
  );
}
