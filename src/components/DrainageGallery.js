"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import YarlLightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function DrainageGallery() {
  const images = [
    { src: "/drainage/avant_apres_jambe.png", alt: "Avant / Après jambes" },
    { src: "/drainage/avant_apres_ventre.png", alt: "Avant / Après ventre" },
    { src: "/drainage/drainage_jambe.png", alt: "Drainage des jambes" },
    { src: "/drainage/drainage_ventre.png", alt: "Drainage du ventre" },
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="mt-12 max-w-5xl mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer rounded-lg overflow-hidden shadow-md"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 object-cover"
            />
          </motion.div>
        ))}
      </div>

      <YarlLightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
      />
    </div>
  );
}
