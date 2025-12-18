"use client";

import { useState } from "react";
import Image from "next/image";

/* ✅ LISTE DES IMAGES */
const IMAGES = [
  {
    src: "/drainage/carousel/drainage-jambes.webp",
    alt: "Drainage lymphatique des jambes",
    w: 900,
    h: 600,
  },
  {
    src: "/drainage/carousel/drainage-mollet.webp",
    alt: "Drainage lymphatique des mollets",
    w: 800,
    h: 1000,
  },
  {
    src: "/drainage/carousel/drainage-ventre.webp",
    alt: "Drainage lymphatique du ventre",
    w: 900,
    h: 600,
  },
  {
    src: "/drainage/carousel/drainage-bras.webp",
    alt: "Drainage lymphatique des bras",
    w: 800,
    h: 1000,
  },
  {
    src: "/drainage/carousel/drainage-mains.webp",
    alt: "Drainage lymphatique des mains",
    w: 900,
    h: 600,
  },
];

export default function DrainageCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const prev = () => {
    setDirection("left");
    setIndex((index - 1 + IMAGES.length) % IMAGES.length);
  };

  const next = () => {
    setDirection("right");
    setIndex((index + 1) % IMAGES.length);
  };

  const img = IMAGES[index];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-[#F6F3EF] shadow-lg">
        <div
          key={index}
          className={`flex justify-center transition-all duration-500 ease-in-out
            ${direction === "right" ? "animate-slide-in-right" : "animate-slide-in-left"}
          `}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={img.w}
            height={img.h}
            className="max-w-full h-auto"
            priority={index === 0}
          />
        </div>
      </div>

      {/* FLÈCHES */}
      <button
        onClick={prev}
        aria-label="Image précédente"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-white transition"
      >
        ‹
      </button>

      <button
        onClick={next}
        aria-label="Image suivante"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-white transition"
      >
        ›
      </button>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-4">
        {IMAGES.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-primary scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
