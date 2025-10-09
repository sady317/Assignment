/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        brand: "#f97316",   // custom orange
        dark: "#1e293b",    // custom dark
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        128: "32rem",
      },
    },
  },

  plugins: [],
}