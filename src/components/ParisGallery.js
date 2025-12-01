"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Lightbox chargée uniquement quand nécessaire → énorme gain perf
const YarlLightbox = dynamic(
  () => import("yet-another-react-lightbox"),
  { ssr: false }
);

import "yet-another-react-lightbox/styles.css";

export default function ParisGallery() {
  const [open, setOpen] = useState(false);

  const images = [
    "/cabinet-paris15/cabinet-paris15-1.webp",
    "/cabinet-paris15/cabinet-paris15-2.webp",
    "/cabinet-paris15/cabinet-paris15-3.webp",
  ];

  return (
    <div className="max-w-4xl mx-auto py-10">

      {/* ==== GALERIE EN GRID ==== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative w-full h-64 rounded-lg shadow-md cursor-pointer hover:opacity-90 transition overflow-hidden"
            onClick={() => setOpen(i)}
          >
            <Image
              src={src}
              alt={`Cabinet Paris 15 - photo ${i + 1}`}
              fill
              className="object-cover"
              loading="lazy"
              quality={75}
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1024px) 50vw,
                     33vw"
              placeholder="blur"
              blurDataURL="/placeholder.webp"
            />
          </div>
        ))}
      </div>

      {/* ==== LIGHTBOX DYNAMIQUE ==== */}
      {open !== false && (
        <YarlLightbox
          open={open !== false}
          close={() => setOpen(false)}
          index={open}
          slides={images.map((src) => ({ src }))}
          carousel={{ preload: 1 }}
        />
      )}
    </div>
  );
}
