"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SECTIONS_FR = [
  ["À qui s'adresse l'ostéopathie ?", "a-qui-sadresse"],
  ["Motifs fréquents", "motifs"],
  ["Déroulement d'une séance", "deroulement"],
  ["Pourquoi me consulter ?", "pourquoi-consulter"],
  ["Pages spécialisées", "specialites"],
  ["Risques & contre-indications", "risques"],
  ["FAQ", "faq"],
];

const SECTIONS_EN = [
  ["Who is osteopathy for?", "a-qui-sadresse"],
  ["Common reasons for consulting", "motifs"],
  ["How a session works", "deroulement"],
  ["Why consult me?", "pourquoi-consulter"],
  ["Specialised pages", "specialites"],
  ["Risks & contraindications", "risques"],
  ["FAQ", "faq"],
];

export default function OsteopathieNav() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en") ?? false;
  const SECTIONS = isEn ? SECTIONS_EN : SECTIONS_FR;
  const [activeSection, setActiveSection] = useState("a-qui-sadresse");

  useEffect(() => {
    const sectionIds = SECTIONS.map(([, id]) => id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [SECTIONS]);

  return (
    <aside className="hidden xl:block fixed left-6 top-40 w-64 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-light/50 rounded-2xl p-5 z-40">
      <h3 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">
        {isEn ? "Contents" : "Sommaire"}
      </h3>
      <ul className="space-y-4 text-base">
        {SECTIONS.map(([label, id]) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block transition-all duration-200 font-medium border-l-2 pl-3 ${
                activeSection === id
                  ? "border-primary text-primary"
                  : "border-transparent text-graywarm hover:text-primary hover:border-light"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
