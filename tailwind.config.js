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
        graywarm: "#6B645F",     // NOUVEAU : texte courant (beaucoup plus lisible)
      },
    },
  },
  plugins: [],
};
