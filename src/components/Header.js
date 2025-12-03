// src/components/Header.js
"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  /* ==== Scroll shadow (sans décalage) ==== */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ==== Portal OK une fois monté ==== */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ==== Scroll lock mobile propre (iOS compliant) ==== */
  useEffect(() => {
    if (!mounted) return;

    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // iOS FIX
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [open, mounted]);

  const toggleMenu = () => setOpen((o) => !o);

  /* ==== Active link ==== */
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
    ["Qui suis-je ?", "/a-propos"],
    ["Contact", "/contact"],
  ];

  const menuItemBase =
    "relative inline-block text-sm md:text-base transition-colors duration-200";

  const getMenuItemClass = (href) =>
    [
      menuItemBase,
      isActive(href)
        ? "text-primary font-semibold"
        : "text-graywarm hover:text-primary",
    ].join(" ");

  /* =====================
     MENU MOBILE PORTAL
     ===================== */
  const mobileMenu =
    open && (
      <div
        className="
          fixed inset-0 z-[9999] bg-offwhite
          flex flex-col animate-fadeInMenu
        "
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobile"
      >
        {/* Top bar */}
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

        {/* Links */}
        <nav
          className="flex-1 flex flex-col items-center justify-center gap-6 text-primary font-semibold text-lg"
          aria-label="Navigation mobile"
        >
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
        </nav>
      </div>
    );

  return (
    <>
      {/* ============ HEADER PRINCIPAL ============ */}
      <header
        className={`
          w-full sticky top-0 z-[70]
          bg-offwhite/95 backdrop-blur-sm border-b border-graywarm/30
          transition-shadow duration-300
          ${isScrolled ? "shadow-md" : "shadow-none"}
        `}
        style={{ height: "72px" }} /* Fix hauteur → plus de CLS */
        aria-label="Navigation principale"
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-6">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Retour à l’accueil"
          >
            <div className="relative w-10 h-10 md:w-11 md:h-11 shrink-0">
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

          {/* MENU DESKTOP */}
          <nav
            className="hidden md:flex items-center gap-6 text-primary font-medium"
            aria-label="Menu principal"
          >
            {links.map(([label, href]) => (
              <Link key={href} href={href} className={getMenuItemClass(href)}>
                {label}
              </Link>
            ))}
          </nav>

          {/* BOUTON MOBILE */}
          <button
            className="md:hidden flex items-center gap-2 text-primary focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {!open ? (
              <svg width="28" height="28" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24">
                <path
                  d="M5 5l14 14M19 5L5 19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* PORTAL MENU MOBILE */}
      {mounted && mobileMenu && createPortal(mobileMenu, document.body)}
    </>
  );
}
