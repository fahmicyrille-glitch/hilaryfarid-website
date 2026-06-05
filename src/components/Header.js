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

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const links = [
    ["Accueil", "/"],
    ["Ostéopathie", "/osteopathie", false, [
      ["👶 Nourrisson", "/osteopathie/nourrisson"],
      ["🤰 Grossesse & Post-partum", "/osteopathie/femme-enceinte"],
      ["🏃 Sport", "/osteopathie/sport"],
    ]],
    ["Drainage Renata", "/drainage"],
    //["Conseil Visio", "/visio", true],
    ["Tarifs", "/tarifs"],
    ["Sèvres", "/sevres"],
    ["Paris 15", "/paris15"],
    ["Témoignages", "/temoignages"],
    ["Bio", "/a-propos"],
    ["Contact", "/contact"],
  ];

  const menuItemBase = "relative inline-block transition-colors duration-200 whitespace-nowrap";

  const getMenuItemClass = (href) =>
    [
      menuItemBase,
      "text-[13px] lg:text-base",
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
        className="fixed inset-0 z-[9999] bg-offwhite flex flex-col animate-fadeInMenu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobile"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-graywarm/30">
          <span className="text-primary font-semibold text-lg">Menu – Hilary Farid</span>
          <button onClick={toggleMenu} className="text-3xl text-primary" aria-label="Fermer le menu">
            &times;
          </button>
        </div>
        <nav className="flex-1 flex flex-col items-center justify-center gap-5 text-primary font-semibold text-lg overflow-y-auto py-8">
          {links.map(([label, href, isNew, subLinks]) =>
            subLinks ? (
              <div key={href} className="flex flex-col items-center gap-2">
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === href ? null : href)}
                  className={`${isActive(href) ? "text-primary" : "text-graywarm"} inline-flex items-center gap-1`}
                >
                  {label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`transition-transform ${mobileExpanded === href ? "rotate-180" : ""}`}>
                    <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {mobileExpanded === href && (
                  <div className="flex flex-col items-center gap-3 mt-1">
                    <Link href={href} onClick={() => { setOpen(false); setMobileExpanded(null); }} className={`text-base font-medium ${isActive(href) && pathname === href ? "text-primary" : "text-graywarm"}`}>
                      Tous les soins
                    </Link>
                    {subLinks.map(([subLabel, subHref]) => (
                      <Link
                        key={subHref}
                        href={subHref}
                        onClick={() => { setOpen(false); setMobileExpanded(null); }}
                        className={`text-base font-medium ${isActive(subHref) ? "text-primary" : "text-graywarm"}`}
                      >
                        {subLabel}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`${isActive(href) ? "text-primary" : "text-graywarm"} relative inline-block`}
              >
                {label}
                {isNew && (
                  <span className="absolute -top-3 -right-6 bg-secondary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                    NEW
                  </span>
                )}
              </Link>
            )
          )}
        </nav>
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
            {/* Le sous-titre est de retour ! */}
            <span className="text-xs text-graywarm hidden xl:block whitespace-nowrap">
              Ostéopathe DO – Drainage Lymphatique Renata França
            </span>
          </div>
        </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-x-3 lg:gap-x-5 text-primary font-medium px-2" aria-label="Menu principal">
            {links.map(([label, href, isNew, subLinks]) =>
              subLinks ? (
                <div
                  key={href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={href}
                    className={`${getMenuItemClass(href)} inline-flex items-center gap-0.5`}
                  >
                    {label}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="ml-0.5 opacity-60">
                      <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  {openDropdown === href && (
                    <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-light/60 py-2 min-w-[220px] z-50">
                      {subLinks.map(([subLabel, subHref]) => (
                        <Link
                          key={subHref}
                          href={subHref}
                          className={`block px-4 py-2 text-sm transition-colors ${isActive(subHref) ? "text-primary font-semibold bg-light/60" : "text-graywarm hover:text-primary hover:bg-light/50"}`}
                        >
                          {subLabel}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className={`${getMenuItemClass(href)} ${isNew ? "mr-4" : ""}`}
                >
                  {label}
                  {isNew && (
                    <span className="absolute -top-2 -right-5 bg-secondary text-white text-[8px] leading-none font-bold px-1.5 py-1 rounded-full shadow-sm">
                      NEW
                    </span>
                  )}
                </Link>
              )
            )}
          </nav>

          {/* BOUTON MOBILE */}
          <button
            className="md:hidden flex items-center p-2 text-primary focus:outline-none"
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
      </header>

      {mounted && mobileMenu && createPortal(mobileMenu, document.body)}
    </>
  );
}
