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
 * HeroMotion — CSS animation pure (pas de Framer Motion)
 * → Visible dès le 1er frame CSS, aucune dépendance à l'hydratation JS
 * → Corrige le délai LCP de 2560ms causé par initial:{opacity:0} Framer Motion
 */
export function HeroMotion({ children }) {
  return <div className="fade-hero">{children}</div>;
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
