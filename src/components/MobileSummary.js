"use client";

export default function MobileSummary({ sections, activeId, smoothScroll }) {
  return (
    <div className="lg:hidden mb-4">
      <div className="bg-white rounded-2xl border border-light p-4">
        <h3 className="text-base font-semibold text-primary mb-3 uppercase tracking-wide">
          Sommaire
        </h3>

        <div className="flex flex-wrap gap-2 text-sm">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={(e) => smoothScroll(e, s.id)}
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
  );
}
