"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

export default function ParisGallery() {
  const images = [
    "/cabinet-paris15/cabinet-paris15-1.jpeg",
    "/cabinet-paris15/cabinet-paris15-2.jpeg",
    "/cabinet-paris15/cabinet-paris15-3.jpeg",
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      {/* SLIDER */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
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
                alt={`Cabinet Paris 15 - Photo ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />
    </div>
  );
}
