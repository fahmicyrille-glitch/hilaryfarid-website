// src/components/Header.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

// === Framer Motion Dynamic Imports ===
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const MotionSpan = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.span),
  { ssr: false }
);

const AnimatePresence = dynamic(
  () => import("framer-motion").then((mod) => mod.AnimatePresence),
  { ssr: false }
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setOpen((prev) => !prev);

  // Shrink du header au scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const menuItemBase =
    "relative inline-block transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:bg-primary after:transition-all after:duration-300";

  const getMenuItemClass = (href) =>
    [
      menuItemBase,
      "text-sm md:text-base",
      isActive(href)
        ? "text-primary font-semibold after:w-full"
        : "text-graywarm hover:text-primary after:w-0 hover:after:w-full",
    ].join(" ");

  const links = [
    ["Accueil", "/"],
    ["Ostéopathie", "/osteopathie"],
    ["Drainage", "/drainage"],
    ["Tarifs", "/tarifs"],
    ["Sèvres", "/sevres"],
    ["Paris 15", "/paris15"],
    ["Témoignages", "/temoignages"],
    ["À propos", "/a-propos"],
    ["Contact", "/contact"],
  ];

  return (
    <header
      className={`w-full sticky top-0 z-[9998] border-b border-graywarm/40 bg-offwhite/95 backdrop-blur-sm transition-all duration-300
        ${isScrolled ? "py-1 shadow-md" : "py-3"}
      `}
      style={{ minHeight: "70px" }}
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">

        {/* LOGO + NOM */}
        <Link href="/" className="flex items-center gap-3" aria-label="Retour à l’accueil">
          <div className="relative w-10 h-10 md:w-11 md:h-11">
            <Image
              src="/hilary-logo.svg"
              alt="Logo du cabinet d’ostéopathie Hilary Farid"
              fill
              sizes="44px"
              className="object-contain rounded-full"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-primary text-base md:text-lg font-semibold">
              Hilary Farid
            </span>
            <span className="text-xs text-graywarm hidden sm:block">
              Ostéopathe DO – Drainage Lymphatique Renata França
            </span>
          </div>
        </Link>

        {/* BOUTON MOBILE HAMBURGER (plus visible) */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <MotionSpan
            initial={false}
            animate={open ? "open" : "closed"}
            className="block w-8 h-8 relative"
          >
            {/* Barre 1 */}
            <MotionSpan
              variants={{
                closed: { rotate: 0, y: -7 },
                open: { rotate: 45, y: 0 },
              }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 h-[3px] bg-primary"
            />

            {/* Barre 2 */}
            <MotionSpan
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] bg-primary"
            />

            {/* Barre 3 */}
            <MotionSpan
              variants={{
                closed: { rotate: 0, y: 7 },
                open: { rotate: -45, y: 0 },
              }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 h-[3px] bg-primary bottom-0"
            />
          </MotionSpan>
        </button>
      </div>

      {/* MENU MOBILE FULLSCREEN — FIX ANDROID */}
      <AnimatePresence>
        {open && (
          <MotionDiv
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed inset-0
              z-[9999]
              bg-offwhite
              bg-opacity-100
              flex flex-col
            "
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobile"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-graywarm/30">
              <span className="text-primary font-semibold text-lg">
                Menu – Hilary Farid
              </span>
              <button
                onClick={toggleMenu}
                className="text-3xl text-primary"
                aria-label="Fermer le menu"
              >
                &times;
              </button>
            </div>

            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col items-center justify-center gap-5 text-primary font-semibold text-lg"
            >
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`relative px-2 py-1 ${
                    isActive(href) ? "text-primary" : "text-graywarm"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  );
}
