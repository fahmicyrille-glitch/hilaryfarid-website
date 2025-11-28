"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

export default function SevresGallery() {
  const [open, setOpen] = useState(false);

  const images = [
    "/cabinet-sevres/cabinet-sevres-1.webp",
    "/cabinet-sevres/cabinet-sevres-2.webp",
    "/cabinet-sevres/cabinet-sevres-3.webp",
  ];

  return (
    <div className="max-w-4xl mx-auto py-10">
      {/* Grid images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative w-full h-64 rounded-lg shadow-md cursor-pointer hover:opacity-90 transition overflow-hidden"
            onClick={() => setOpen(i)}
          >
            <Image
              src={src}
              alt={`Cabinet Sèvres - photo ${i + 1}`}
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
