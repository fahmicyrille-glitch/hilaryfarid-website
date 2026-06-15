"use client";

import { useEffect, useState } from "react";
import MobileSummary from "@/components/MobileSummary";

const SECTIONS = [
  { id: "cabinet", label: "Le cabinet & Galerie" },
  { id: "osteopathe", label: "Votre ostéopathe" },
  { id: "avis", label: "Avis patients" },
  { id: "pourquoi", label: "Pourquoi à Paris 15 ?" },
  { id: "acces", label: "Adresse & accès" },
  { id: "faq", label: "FAQ" },
];

function smoothScroll(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: "smooth" });
}

export default function Paris15Nav({ children }) {
  const [activeId, setActiveId] = useState("cabinet");

  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.25;
      let current = "cabinet";
      SECTIONS.forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= trigger && rect.bottom > trigger) current = s.id;
      });
      setActiveId(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-28 bg-white rounded-2xl shadow-sm border border-light/70 p-5">
          <h2 className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Sommaire</h2>
          <nav className="space-y-2 text-sm">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => smoothScroll(e, s.id)}
                className={`block rounded-lg px-3 py-2 transition-colors ${
                  activeId === s.id
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-graywarm hover:text-primary hover:bg-light/70"
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
      <div className="flex-1 space-y-16">
        <MobileSummary sections={SECTIONS} activeId={activeId} smoothScroll={smoothScroll} />
        {children}
      </div>
    </>
  );
}
