"use client";

import { motion } from "framer-motion";

/**
 * FadeIn — zéro déplacement, 100% safe CLS
 */
export function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      style={{ willChange: "opacity" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * SlideUp — remplacé par un léger blur (aucun déplacement visuel)
 */
export function SlideUp({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(6px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      style={{ willChange: "opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * HeroMotion — utilisé pour le HERO, 0 shift + rendu SSR immédiat
 * → Très important pour améliorer ton LCP
 */
export function HeroMotion({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ willChange: "opacity" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * FadeInNoShift — identique à FadeIn (juste sans y)
 */
export function FadeInNoShift({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      style={{ willChange: "opacity" }}
    >
      {children}
    </motion.div>
  );
}
