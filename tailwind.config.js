/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-bg": "url('/images/mobile/background.png')",
        "main-bg": "url('/images/background.png')",
        "mobile-menu-bg": "url('/images/mobile/bg_menu_mobile.png')",
      },
    },
    fontFamily: {
      gothic: ["DotGothic16"],
      zeyada: ["Zeyada"],
      tourney: ["Tourney"],
    },
  },
  plugins: [],
};
