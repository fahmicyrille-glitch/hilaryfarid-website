"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileSummary from "@/components/MobileSummary";

const SECTIONS_FR = [
  { id: "consultations", label: "Consultations & prestations" },
  { id: "note", label: "Informations importantes" },
  { id: "faq", label: "FAQ Tarifs" },
  { id: "cta", label: "Prendre rendez-vous" },
];

const SECTIONS_EN = [
  { id: "consultations", label: "Consultations & Services" },
  { id: "note", label: "Important Information" },
  { id: "faq", label: "Pricing FAQ" },
  { id: "cta", label: "Book an Appointment" },
];

function smoothScroll(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: "smooth" });
}

export default function TarifsNav({ children }) {
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en") ?? false;
  const SECTIONS = isEn ? SECTIONS_EN : SECTIONS_FR;
  const [activeId, setActiveId] = useState("consultations");

  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.25;
      let current = "consultations";
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
        <div className="sticky top-28 bg-white rounded-2xl shadow-sm border border-light p-5">
          <h3 className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
            {isEn ? "Contents" : "Sommaire"}
          </h3>
          <nav className="space-y-2 text-sm">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => smoothScroll(e, s.id)}
                className={`block px-3 py-2 rounded-lg transition ${
                  activeId === s.id
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-graywarm hover:bg-light hover:text-primary"
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
      <div className="flex-1 space-y-16">
        <MobileSummary sections={SECTIONS} activeId={activeId} smoothScroll={smoothScroll} isEn={isEn} />
        {children}
      </div>
    </>
  );
}
