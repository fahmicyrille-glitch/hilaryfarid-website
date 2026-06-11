// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7A685B",        // Taupe profond – AA (≥4.5:1 sur offwhite), titres & boutons
        "primary-soft": "#9E8C7F", // Ancien primary – usages décoratifs (fonds, halos)
        secondary: "#7B5A3E",      // Accents – accessible (contraste 5.5:1 sur fond clair)
        light: "#F4EEE8",          // Fonds très clairs
        offwhite: "#FFFBF7",       // Fond page
        graywarm: "#6B645F",       // Texte courant lisible
        doctolib: "#0596DE",       // Réservé aux CTA Doctolib
        "doctolib-dark": "#047CBD",
        cream: "#FAF6F3",          // Fond carte drainage
        "cream-border": "#E8D8CE",
        ink: "#1E293B",            // Texte sombre cartes drainage
      },

      // === ANIMATIONS GLOBALES ===
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out",
        "fade-in": "fadeIn 0.2s ease-out forwards",
        "fade-in-up": "fadeInUp 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
