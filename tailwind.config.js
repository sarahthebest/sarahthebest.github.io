/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "selector",
  content: [
    "./src/components/**/*.{js,jsx,html}",
    "./src/assets/fonts/*.woff2",
    "./src/*.{js,jsx,html}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#101010",
        light: "#fbfbfb",
        orange: "#ff6040",
        bg: "#1e1222",
        purple: "#4338ca",
        borderColor: "rgba(255, 255, 255, 0.389)",
        darkBorder: "#1717175d",
        customBG: "rgba(0, 0, 0, 0.786)",
        customBGDark: "rgba(255, 255, 255, 0.669);",
      },
      fontFamily: {
        sans: ["Archivo-Regular"],
        serif: ["ui-serif", "Georgia"],
        mono: ["Rainy-Hearts"],
        display: ["Libre Baskerville", "serif"],
        body: ['"Open Sans"'],
      },
    },
  },
  variants: {},
};
