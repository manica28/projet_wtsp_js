// Le fichier de configuration de Tailwind :
// Il sert à indiquer où sont tes fichiers HTML, et à personnaliser les couleurs, polices, etc.

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./src/**/*.{js,html}",

  ],
  theme: {
    extend: {
      backgroundImage:{
        'image': "url('/assets/moi3.jpeg')",
        'image2': "url('/assets/cap.png')"

      }
    },
  },
  plugins: [],
}