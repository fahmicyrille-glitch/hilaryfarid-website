"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

/**
 * Slider avant/après interactif (drag tactile + souris + clavier).
 *
 * @param before  src de l'image AVANT
 * @param after   src de l'image APRÈS
 * @param alt     description de la comparaison
 * @param aspect  ratio largeur/hauteur des images (ex: 432/1060)
 */
export default function BeforeAfterSlider({ before, after, alt, aspect = 432 / 1060 }) {
  const containerRef = useRef(null);
  const [pos, setPos] = useState(50); // % de la largeur révélant l'AVANT
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, ratio)));
  }, []);

  const onPointerDown = (e) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e) => {
    if (draggingRef.current) updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    draggingRef.current = false;
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 4));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl select-none touch-none cursor-ew-resize"
      style={{ aspectRatio: `${aspect}` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* APRÈS (fond) */}
      <Image
        src={after}
        alt={`${alt} – après`}
        fill
        sizes="(max-width: 768px) 90vw, 420px"
        className="object-cover pointer-events-none"
        loading="lazy"
      />

      {/* AVANT (recadré par clip-path) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={`${alt} – avant`}
          fill
          sizes="(max-width: 768px) 90vw, 420px"
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Étiquettes */}
      <span className="absolute top-3 left-3 bg-black/55 text-white text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full pointer-events-none">
        Avant
      </span>
      <span className="absolute top-3 right-3 bg-white/80 text-ink text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full pointer-events-none">
        Après
      </span>

      {/* Ligne + poignée */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-0 bottom-0 -translate-x-1/2 w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.35)]" />
        <button
          type="button"
          role="slider"
          aria-label={`Comparateur avant/après : ${alt}`}
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg border border-light flex items-center justify-center text-primary pointer-events-auto cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-primary/60"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
