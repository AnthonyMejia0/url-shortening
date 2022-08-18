/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#2acfcf",
        "dark-violet": "#3b3054",
        red: "#f46262",
        gray: "#bfbfbf",
        "grayish-violet": "#9e9aa7",
        "very-dark-blue": "#35323e",
        "very-dark-violet": "#232127",
      },
      screens: {
        "3xl": "1800px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
