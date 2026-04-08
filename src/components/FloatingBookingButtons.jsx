"use client";

import { usePathname } from "next/navigation";

export default function FloatingBookingButtons() {
  const pathname = usePathname();

  // On vérifie si on est sur la page drainage pour masquer le bouton mobile
  const isDrainagePage = pathname === "/drainage";

  return (
    <>
      {/* =========================================
          MOBILE DOCTOLIB
          Masqué sur /drainage pour éviter les doublons
      ========================================= */}
      <div
        className={`
          ${isDrainagePage ? "hidden" : "fixed md:hidden"}
          bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[320px]
        `}
      >
        <button
          type="button"
          className="
            trigger-booking-modal
            w-full flex items-center justify-center gap-3
            bg-[#0596DE] text-white
            px-6 py-4 rounded-full
            shadow-[0_8px_25px_rgba(5,150,222,0.4)]
            active:scale-95 transition-transform duration-200
          "
        >
          {/* Wrapper pour l'animation de l'icône */}
          <div className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-40 animate-ping"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 relative z-10"
            >
              <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5zM11.25 16.5a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0v-2.25zm3.75 0a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0v-2.25z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-bold text-base tracking-wide text-white">
            Prendre RDV
          </span>
        </button>
      </div>

      {/* =========================================
          DESKTOP DOCTOLIB
          Toujours visible sur toutes les pages
      ========================================= */}
      <div className="hidden md:flex fixed top-1/2 right-6 -translate-y-1/2 z-50 group">
        <button
          type="button"
          className="
            trigger-booking-modal
            flex items-center gap-3
            bg-[#0596DE] text-white
            px-5 py-4 rounded-2xl
            shadow-[0_8px_30px_rgba(5,150,222,0.3)]
            transition-all duration-300 ease-out
            hover:shadow-[0_12px_40px_rgba(5,150,222,0.5)]
            hover:-translate-y-1 hover:pr-7
          "
        >
          {/* Wrapper pour l'animation de l'icône au hover */}
          <div className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-0 group-hover:opacity-40 group-hover:animate-ping transition-opacity duration-300"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110"
            >
              <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5zM11.25 16.5a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0v-2.25zm3.75 0a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0v-2.25z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-bold text-base tracking-wide whitespace-nowrap">
            Prendre RDV
          </span>
        </button>
      </div>
    </>
  );
}
