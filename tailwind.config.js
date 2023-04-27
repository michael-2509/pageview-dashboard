/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#131316",
      "light-gray": "#31373D",
      white: "#ffffff",
      "white-border": "#EFF1F6",
      red: "#fc4747",
      gray: "#56616B",
      orange: "#FF5403",
      "light-orange": "#FFEEE5",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        soehne: ["soehne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
