/** @type {import('tailwindcss').Config} */
//eslint-
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      fontSize: {
        huge: ["50rem", { lineHeight: 1 }],
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
