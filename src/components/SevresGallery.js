"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function SevresGallery() {
  const [open, setOpen] = useState(false);

  const images = [
    "/cabinet-sevres/cabinet-sevres-1.jpeg",
    "/cabinet-sevres/cabinet-sevres-2.jpeg",
    "/cabinet-sevres/cabinet-sevres-3.jpeg",
  ];

  return (
    <div className="max-w-4xl mx-auto py-10">
      {/* Grid images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Cabinet Sèvres - photo ${i + 1}`}
            className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition"
            onClick={() => setOpen(i)}
          />
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
