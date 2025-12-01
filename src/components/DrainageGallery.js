"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Lightbox chargée uniquement au clic (énorme gain perf 🚀)
const YarlLightbox = dynamic(
  () => import("yet-another-react-lightbox"),
  { ssr: false }
);

// Styles séparés + lazy load automatique
import "yet-another-react-lightbox/styles.css";

// Motion côté client uniquement
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function DrainageGallery() {
  const images = [
    { src: "/drainage/avant_apres_jambe.webp", alt: "Avant / Après jambes" },
    { src: "/drainage/avant_apres_ventre.webp", alt: "Avant / Après ventre" },
    { src: "/drainage/drainage_jambe.webp", alt: "Drainage des jambes" },
    { src: "/drainage/drainage_ventre.webp", alt: "Drainage du ventre" },
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="mt-12 max-w-5xl mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <MotionDiv
            key={i}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer rounded-lg overflow-hidden shadow-md relative w-full h-48"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              loading="lazy"
              quality={75}
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 50vw,
                     33vw"
              placeholder="blur"
              blurDataURL="/placeholder.webp"
            />
          </MotionDiv>
        ))}
      </div>

      {open && (
        <YarlLightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images}
          carousel={{ preload: 1 }} // optimise mémoire
        />
      )}
    </div>
  );
}
