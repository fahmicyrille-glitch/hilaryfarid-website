"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

export default function ParisGallery() {
  const [open, setOpen] = useState(false);

  const images = [
    "/cabinet-paris15/cabinet-paris15-1.webp",
    "/cabinet-paris15/cabinet-paris15-2.webp",
    "/cabinet-paris15/cabinet-paris15-3.webp",
  ];

  return (
    <div className="max-w-4xl mx-auto py-10">
      {/* Grid des images */}
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
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open !== false}
        close={() => setOpen(false)}
        index={open ?? 0}
        slides={images.map((src) => ({ src }))}
      />
    </div>
  );
}
