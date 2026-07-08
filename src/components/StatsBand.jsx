"use client";

import { useEffect, useRef, useState } from "react";
import { GLOBAL_REVIEW_COUNT } from "@/config/siteConfig";

const STATS = [
  { value: 5, suffix: "/5", label: "Note moyenne Google", decimals: 0 },
  { value: Number(GLOBAL_REVIEW_COUNT), suffix: "", label: "Avis patients 5 étoiles", decimals: 0, icon: "★" },
  { value: 2, suffix: "", label: "Cabinets — Sèvres & Paris 15", decimals: 0 },
  { value: 1500, prefix: "+", label: "Patients accompagnés", decimals: 0 },
];

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

function CountUp({ value, prefix = "", suffix = "", started, duration = 1400 }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!started) return;
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      setDisplay(Math.round(easeOut(p) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value, duration]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/** Bande de chiffres clés avec compteur animé au scroll. */
export default function StatsBand() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
      {STATS.map((s) => (
        <div key={s.label} className="text-center">
          <p className="text-4xl md:text-5xl font-bold text-primary tabular-nums flex items-center justify-center gap-2">
            {s.icon && <span className="text-amber-400 text-3xl md:text-4xl" aria-hidden="true">{s.icon}</span>}
            <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} started={started} />
          </p>
          <p className="mt-2 text-sm text-graywarm font-medium">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
