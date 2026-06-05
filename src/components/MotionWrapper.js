"use client";

/**
 * FadeIn — CSS animation (aucun Framer Motion)
 * → élimine le coût JS d'initialisation sur chaque section
 */
export function FadeIn({ children, delay = 0 }) {
  return (
    <div
      style={{
        opacity: 0,
        animation: `fadeSoft 0.5s ease-out ${delay}s forwards`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * SlideUp — CSS blur animation
 */
export function SlideUp({ children, delay = 0 }) {
  return (
    <div
      style={{
        opacity: 0,
        animation: `blurIn 0.6s ease-out ${delay}s forwards`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * HeroMotion — CSS pure, visible dès le 1er frame (LCP-safe)
 */
export function HeroMotion({ children }) {
  return <div className="fade-hero">{children}</div>;
}

/**
 * FadeInNoShift — identique à FadeIn
 */
export function FadeInNoShift({ children, delay = 0 }) {
  return (
    <div
      style={{
        opacity: 0,
        animation: `fadeSoft 0.6s ease-out ${delay}s forwards`,
      }}
    >
      {children}
    </div>
  );
}
