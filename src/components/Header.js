"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconChevronDown, IconCalendar, IconPhone } from "@/components/icons/UiIcons";
import { PHONE, PHONE_LINK } from "@/config/contact";

/*
  Navigation resserrée : 6 entrées + CTA "Prendre RDV".
  href: null → groupe sans page propre (dropdown uniquement).
*/
const NAV = [
  {
    label: "Ostéopathie",
    href: "/osteopathie",
    sub: [
      ["Tous les soins", "/osteopathie"],
      ["Nourrisson", "/osteopathie/nourrisson"],
      ["Freins restrictifs", "/osteopathie/freins-restrictifs"],
      ["Plagiocéphalie", "/osteopathie/plagiocephalie"],
      ["Grossesse & Post-partum", "/osteopathie/femme-enceinte"],
      ["Sport", "/osteopathie/sport"],
    ],
  },
  {
    label: "Drainage Renata",
    href: "/drainage",
    sub: [
      ["La méthode", "/drainage"],
      ["Bienfaits", "/drainage/bienfaits"],
      ["Carte cadeau", "/carte-cadeau"],
    ],
  },
  {
    label: "Cabinets",
    href: null,
    sub: [
      ["Sèvres", "/sevres"],
      ["Paris 15", "/paris15"],
    ],
  },
  { label: "Tarifs", href: "/tarifs" },
  {
    label: "À propos",
    href: "/a-propos",
    sub: [
      ["Bio", "/a-propos"],
      ["Témoignages", "/temoignages"],
      ["Blog", "/blog"],
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const pathname = usePathname();

  /* ==== Scroll shadow ==== */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ==== Portal OK une fois monté ==== */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ==== Fermer dropdowns + menu mobile à chaque navigation ==== */
  useEffect(() => {
    setOpenDropdown(null);
    setOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  /* ==== Scroll lock mobile propre ==== */
  useEffect(() => {
    if (!mounted) return;
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
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

  const isPathActive = (href) =>
    href === "/" ? pathname === "/" : !!href && pathname.startsWith(href);

  // Un groupe est actif si sa page parente ou l'un de ses sous-liens l'est
  const isItemActive = (item) =>
    isPathActive(item.href) ||
    (item.sub || []).some(([, subHref]) => isPathActive(subHref));

  /* Dans un dropdown, seul le sous-lien LE PLUS PRÉCIS est actif :
     sur /osteopathie/nourrisson, "Nourrisson" est surligné mais pas
     "Tous les soins" (/osteopathie), pourtant préfixe du chemin. */
  const bestSubMatch = (sub) => {
    let best = null;
    for (const [, href] of sub) {
      if (pathname === href || pathname.startsWith(href + "/")) {
        if (!best || href.length > best.length) best = href;
      }
    }
    return best;
  };

  const getMenuItemClass = (active) =>
    [
      "relative inline-flex items-center gap-0.5 transition-colors duration-200 whitespace-nowrap",
      "text-[14px] xl:text-[15px]",
      active ? "text-primary font-semibold" : "text-graywarm hover:text-primary",
    ].join(" ");

  const closeMobile = () => {
    setOpen(false);
    setMobileExpanded(null);
  };

  /* =====================
      MENU MOBILE PORTAL
     ===================== */
  const mobileMenu =
    open && (
      <div
        className="fixed inset-0 z-[9999] bg-offwhite flex flex-col animate-fadeInMenu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobile"
      >
        {/* Barre du haut — même hauteur que le header pour une transition douce */}
        <div className="h-[72px] shrink-0 flex items-center justify-between px-5 border-b border-graywarm/20">
          <span className="flex items-center gap-2.5">
            <span className="relative w-9 h-9 shrink-0">
              <Image
                src="/hilary-logo.svg"
                alt=""
                fill
                sizes="36px"
                className="object-contain rounded-full"
              />
            </span>
            <span className="text-primary font-semibold">Hilary Farid</span>
          </span>
          <button
            onClick={toggleMenu}
            className="w-10 h-10 flex items-center justify-center rounded-full text-primary hover:bg-light transition"
            aria-label="Fermer le menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 5l14 14M19 5L5 19" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Liste de navigation — alignée à gauche, séparateurs fins */}
        <nav className="flex-1 overflow-y-auto px-5 py-2">
          <Link
            href="/"
            onClick={closeMobile}
            className={`block py-4 border-b border-light text-[17px] font-semibold ${
              pathname === "/" ? "text-primary" : "text-graywarm"
            }`}
          >
            Accueil
          </Link>

          {NAV.map((item) =>
            item.sub ? (
              <div key={item.label} className="border-b border-light">
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                  }
                  aria-expanded={mobileExpanded === item.label}
                  className={`w-full flex items-center justify-between py-4 text-[17px] font-semibold ${
                    isItemActive(item) ? "text-primary" : "text-graywarm"
                  }`}
                >
                  {item.label}
                  <span
                    className={`w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 ${
                      mobileExpanded === item.label ? "rotate-180" : ""
                    }`}
                  >
                    <IconChevronDown className="w-3.5 h-3.5" />
                  </span>
                </button>

                {/* Sous-liens : dépliage animé (grid-rows), indentés */}
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{
                    gridTemplateRows: mobileExpanded === item.label ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="pb-3 flex flex-col">
                      {item.sub.map(([subLabel, subHref]) => (
                        <Link
                          key={subHref}
                          href={subHref}
                          onClick={closeMobile}
                          className={`py-2.5 pl-4 border-l-2 text-[15px] font-medium transition-colors ${
                            bestSubMatch(item.sub) === subHref
                              ? "border-primary text-primary"
                              : "border-light text-graywarm"
                          }`}
                        >
                          {subLabel}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className={`block py-4 border-b border-light text-[17px] font-semibold ${
                  isItemActive(item) ? "text-primary" : "text-graywarm"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA conversion — fixés en bas, hors zone de scroll */}
        <div className="shrink-0 px-5 pt-3 pb-[max(1.25rem,env(safe-area-inset-bottom))] border-t border-graywarm/20 bg-offwhite space-y-2.5">
          <button
            type="button"
            onClick={closeMobile}
            className="trigger-booking-modal w-full flex items-center justify-center gap-2 bg-doctolib text-white font-bold px-6 py-3.5 rounded-full shadow-lg hover:bg-doctolib-dark transition"
          >
            <IconCalendar className="w-5 h-5" />
            Prendre rendez-vous
          </button>
          <a
            href={`tel:${PHONE_LINK}`}
            className="w-full flex items-center justify-center gap-2 border border-primary/30 text-primary font-semibold px-6 py-3 rounded-full hover:bg-primary/5 transition"
          >
            <IconPhone className="w-4 h-4" />
            {PHONE}
          </a>
        </div>
      </div>
    );

  return (
    <>
      <header
        className={`w-full sticky top-0 z-[70] bg-offwhite/95 backdrop-blur-sm border-b border-graywarm/30 transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-none"
        }`}
        style={{ height: "72px" }}
        aria-label="Navigation principale"
      >
        <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-4 lg:px-8">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 lg:gap-3 shrink-0" aria-label="Retour à l'accueil">
          <div className="relative w-10 h-10 md:w-11 md:h-11 shrink-0">
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
            <span className="text-primary text-base md:text-lg font-semibold whitespace-nowrap">
              Hilary Farid
            </span>
            <span className="text-xs text-graywarm hidden xl:block whitespace-nowrap">
              Ostéopathe DO – Drainage Lymphatique Renata França
            </span>
          </div>
        </Link>

          {/* MENU DESKTOP (lg+ : en dessous, le menu burger prend le relais
              pour éviter tout débordement avec le CTA) */}
          <nav className="hidden lg:flex items-center gap-x-4 xl:gap-x-6 text-primary font-medium px-2" aria-label="Menu principal">
            {NAV.map((item) =>
              item.sub ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.href ? (
                    <Link href={item.href} className={getMenuItemClass(isItemActive(item))}>
                      {item.label}
                      <IconChevronDown className="w-3 h-3 ml-0.5 opacity-60" />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className={getMenuItemClass(isItemActive(item))}
                      aria-expanded={openDropdown === item.label}
                      onClick={() => setOpenDropdown(item.label)}
                    >
                      {item.label}
                      <IconChevronDown className="w-3 h-3 ml-0.5 opacity-60" />
                    </button>
                  )}
                  {openDropdown === item.label && (
                    /* pt-2 (padding, pas margin) : la zone reste survolée entre
                       le lien et le panneau → le dropdown ne se referme plus */
                    <div className="absolute top-full left-0 pt-2 z-50">
                      <div className="bg-white rounded-xl shadow-lg border border-light/60 py-2 min-w-[220px]">
                        {item.sub.map(([subLabel, subHref]) => (
                          <Link
                            key={subHref}
                            href={subHref}
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              bestSubMatch(item.sub) === subHref
                                ? "text-primary font-semibold bg-light/60"
                                : "text-graywarm hover:text-primary hover:bg-light/50"
                            }`}
                          >
                            {subLabel}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className={getMenuItemClass(isItemActive(item))}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA DESKTOP + BOUTON MOBILE */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="trigger-booking-modal hidden lg:inline-flex items-center gap-2 bg-doctolib text-white text-sm xl:text-[15px] font-bold px-4 xl:px-6 py-2.5 rounded-full shadow-md hover:bg-doctolib-dark hover:shadow-lg transition-all whitespace-nowrap"
            >
              <IconCalendar className="w-4 h-4" />
              Prendre RDV
            </button>

            <button
              className="lg:hidden flex items-center p-2 text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-lg"
              onClick={toggleMenu}
              aria-expanded={open}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {!open ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 5l14 14M19 5L5 19" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {mounted && mobileMenu && createPortal(mobileMenu, document.body)}
    </>
  );
}
