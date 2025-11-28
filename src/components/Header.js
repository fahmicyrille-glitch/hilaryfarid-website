// src/components/Header.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

// Framer Motion (lazy)
const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false }
);
const MotionSpan = dynamic(
  () => import("framer-motion").then((m) => m.motion.span),
  { ssr: false }
);
const AnimatePresence = dynamic(
  () => import("framer-motion").then((m) => m.AnimatePresence),
  { ssr: false }
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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
      className={`w-full sticky top-0 z-[1000] border-b border-graywarm/40 bg-offwhite/95 backdrop-blur-sm transition-all duration-300
        ${isScrolled ? "py-1 shadow-md" : "py-3"}
      `}
      style={{ minHeight: "70px" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-11 md:h-11">
            <Image
              src="/hilary-logo.svg"
              alt="Logo Hilary Farid"
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
              Ostéopathe DO – Renata França
            </span>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 text-primary font-medium">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`text-sm md:text-base ${
                isActive(href)
                  ? "text-primary font-semibold underline underline-offset-4"
                  : "text-graywarm hover:text-primary"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* BURGER MOBILE — VERSION PLUS LISIBLE ET PLUS CONTRASTÉE */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={open}
        >
          <div className="relative w-9 h-9 flex items-center justify-center">
            <span
              className={`block w-8 h-[3px] bg-primary rounded-md shadow-[0_0_3px_rgba(0,0,0,0.4)] transition-all ${
                open ? "rotate-45 translate-y-[2px]" : "-translate-y-2"
              }`}
            />
            <span
              className={`block absolute w-8 h-[3px] bg-primary rounded-md transition-all shadow-[0_0_3px_rgba(0,0,0,0.4)] ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-8 h-[3px] bg-primary rounded-md shadow-[0_0_3px_rgba(0,0,0,0.4)] transition-all ${
                open ? "-rotate-45 -translate-y-[2px]" : "translate-y-2"
              }`}
            />
          </div>
        </button>
      </div>

      {/* MENU MOBILE FIX ANDROID */}
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
              bg-offwhite
              bg-opacity-95
              backdrop-blur-md
              z-[9999]
              flex flex-col shadow-xl
            "
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-graywarm/30">
              <span className="text-primary font-semibold text-lg">
                Menu
              </span>

              <button
                onClick={toggleMenu}
                className="text-primary text-4xl font-light"
              >
                &times;
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-5 text-primary font-semibold text-xl">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={isActive(href) ? "text-primary" : "text-graywarm"}
                >
                  {label}
                </Link>
              ))}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  );
}
