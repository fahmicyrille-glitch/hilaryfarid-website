// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9E8C7F",      // Titre, boutons
        secondary: "#C09A7D",    // Hover boutons / accents
        light: "#F4EEE8",        // Fonds très clairs
        offwhite: "#FFFBF7",     // Fond page
        graywarm: "#6B645F",     // Texte courant lisible
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
