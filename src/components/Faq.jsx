"use client";

import { useState, useId } from "react";
import { IconChevronDown } from "@/components/icons/UiIcons";

/**
 * Accordéon FAQ animé (remplace les <details> bruts).
 * @param items [{ q, a }] — a peut être une string ou un nœud React
 * @param tone "white" (cartes blanches) | "offwhite" (cartes crème, pour fonds blancs)
 */
export default function Faq({ items = [], tone = "white" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const baseId = useId();

  const cardClass =
    tone === "offwhite"
      ? "bg-offwhite/70 border border-light"
      : "bg-white border border-light/70";

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `${baseId}-faq-${i}`;
        return (
          <div
            key={item.q}
            className={`${cardClass} rounded-2xl shadow-sm overflow-hidden transition-shadow ${
              isOpen ? "shadow-md" : ""
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-primary hover:text-secondary transition-colors"
            >
              <span>{item.q}</span>
              <span
                className={`shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <IconChevronDown className="w-4 h-4" />
              </span>
            </button>
            <div
              id={panelId}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-base text-graywarm leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
