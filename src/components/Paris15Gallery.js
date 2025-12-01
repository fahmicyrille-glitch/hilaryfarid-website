"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

/* ================ DYNAMIC IMPORTS ================ */
// Swiper chargé uniquement au scroll → énorme gain perf
const Swiper = dynamic(
  () =>
    import("swiper/react").then((mod) => mod.Swiper),
  { ssr: false }
);

const SwiperSlide = dynamic(
  () =>
    import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);

// Swiper modules
const SwiperModules = dynamic(
  () =>
    import("swiper/modules").then((mod) => ({
      Autoplay: mod.Autoplay,
      Pagination: mod.Pagination,
    })),
  { ssr: false }
);

// Lightbox chargée uniquement au clic
const YarlLightbox = dynamic(
  () => import("yet-another-react-lightbox"),
  { ssr: false }
);

/* Styles */
import "swiper/css";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";

export default function ParisGallery() {
  const images = [
    "/cabinet-paris15/cabinet-paris15-1.webp",
    "/cabinet-paris15/cabinet-paris15-2.webp",
    "/cabinet-paris15/cabinet-paris15-3.webp",
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="max-w-3xl mx-auto mt-10">

      {/* =============== SLIDER =============== */}
      <Swiper
        modules={[]}
        onSwiper={(swiper) => {
          // Charger les modules *après* le rendu → boost perf
          SwiperModules.then((mods) => {
            swiper.params.modules = [mods.Autoplay, mods.Pagination];
            swiper.params.autoplay = { delay: 3000 };
            swiper.params.pagination = { clickable: true };
            swiper.update();
          });
        }}
        loop
        spaceBetween={20}
        className="rounded-lg shadow-lg cursor-pointer"
      >
        {images.map((src, i) => (
          <SwiperSlide
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <div className="relative w-full h-72 rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`Cabinet Paris 15 – Photo ${i + 1}`}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
                quality={75}
                placeholder="blur"
                blurDataURL="/placeholder.webp"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* =============== LIGHTBOX =============== */}
      {open && (
        <YarlLightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images.map((src) => ({ src }))}
          carousel={{ preload: 1 }}
        />
      )}
    </div>
  );
}
