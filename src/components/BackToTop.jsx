"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en") ?? false;

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={handleBackToTop}
      className="
        fixed z-40
        /* POSITION MOBILE : tout en haut de la pile (au-dessus du tél) */
        bottom-40 right-4
        /* POSITION DESKTOP : en bas à droite classique */
        md:bottom-8 md:right-8
        bg-primary text-offwhite
        w-10 h-10 rounded-full shadow-lg
        flex items-center justify-center
        text-lg
        hover:bg-secondary transition
      "
      aria-label={isEn ? "Back to top" : "Revenir en haut de la page"}
    >
      ↑
    </button>
  );
}
