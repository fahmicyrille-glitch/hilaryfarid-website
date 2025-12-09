"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

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
        fixed bottom-6 right-4 md:right-6 z-40
        bg-primary text-offwhite
        w-10 h-10 rounded-full shadow-lg
        flex items-center justify-center
        text-lg
        hover:bg-secondary transition
      "
      aria-label="Revenir en haut de la page"
    >
      ↑
    </button>
  );
}
