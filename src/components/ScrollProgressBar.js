// src/components/ScrollProgressBar.js
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
    const bar = document.getElementById("scroll-progress-bar");
    if (!bar) return;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percent = docHeight > 0 ? scrollTop / docHeight : 0;
      bar.style.transform = `scaleX(${percent})`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 w-full z-[60] h-1 bg-graywarm/10 origin-left">
      <div
        id="scroll-progress-bar"
        className="h-1 bg-secondary origin-left"
        style={{
          transform: "scaleX(0)",
          transition: "transform 0.15s linear",
        }}
      />
    </div>
  );
}
