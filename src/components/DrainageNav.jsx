"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SECTIONS_FR = [
  { id: "presentation", label: "La lymphe, c'est quoi ?" },
  { id: "bienfaits", label: "Bienfaits" },
  { id: "deroulement", label: "Déroulement" },
  { id: "pour-qui", label: "Pour qui ?" },
  { id: "pourquoi-moi", label: "Pourquoi me consulter ?" },
  { id: "avant-apres", label: "Avant / Après" },
  { id: "contraindications", label: "Contre-indications" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Prendre RDV" },
];

const SECTIONS_EN = [
  { id: "presentation", label: "What is lymph?" },
  { id: "bienfaits", label: "Benefits" },
  { id: "deroulement", label: "How it works" },
  { id: "pour-qui", label: "Who is it for?" },
  { id: "pourquoi-moi", label: "Why choose me?" },
  { id: "avant-apres", label: "Before / After" },
  { id: "contraindications", label: "Contraindications" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Book Now" },
];

function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
}

/** Sidebar desktop + sticky mobile CTA + scrollspy pour /drainage */
export default function DrainageNav() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en") ?? false;
  const SECTIONS = isEn ? SECTIONS_EN : SECTIONS_FR;
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id).filter((id) => id !== "cta");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id));
      },
      { root: null, rootMargin: "-25% 0px -45% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sidebar desktop */}
      <aside className="hidden xl:block fixed left-6 top-40 w-56 bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 rounded-xl p-4 z-40">
        <h3 className="text-sm font-semibold text-primary mb-2">{isEn ? "Contents" : "Sommaire"}</h3>
        <ul className="space-y-2 text-sm">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => smoothScrollTo(s.id)}
                className={`block w-full text-left transition font-medium ${
                  activeSection === s.id
                    ? "text-primary underline underline-offset-4"
                    : "text-graywarm hover:text-primary"
                }`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            type="button"
            className="trigger-booking-modal block w-full text-center bg-doctolib text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-doctolib-dark transition"
          >
            {isEn ? "Book via Doctolib" : "Prendre RDV sur Doctolib"}
          </button>
          <p className="mt-2 text-xs text-graywarm text-center">Paris 15 & Sèvres</p>
        </div>
      </aside>

      {/* Sticky CTA mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <div className="leading-tight">
            <p className="text-sm font-semibold text-primary">{isEn ? "Renata França Drainage" : "Drainage Renata França"}</p>
            <p className="text-xs text-graywarm">Paris 15 & Sèvres</p>
          </div>
          <button
            type="button"
            className="trigger-booking-modal bg-doctolib text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-doctolib-dark transition text-sm font-semibold"
          >
            {isEn ? "Book Now" : "Prendre RDV"}
          </button>
        </div>
      </div>

      {/* Sommaire mobile (accordéon) */}
      <DrainageMobileSummary sections={SECTIONS} activeId={activeSection} isEn={isEn} />
    </>
  );
}

function DrainageMobileSummary({ sections, activeId, isEn }) {
  return (
    <div className="xl:hidden py-6 px-6 bg-[#F7F9FB] border-y border-light/50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-light p-4">
          <h3 className="text-base font-semibold text-primary mb-3 uppercase tracking-wide">{isEn ? "Contents" : "Sommaire"}</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => smoothScrollTo(s.id)}
                className={`px-4 py-1.5 rounded-full border transition ${
                  activeId === s.id
                    ? "bg-primary text-offwhite border-primary font-medium"
                    : "border-light text-graywarm hover:border-primary hover:text-primary"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
