/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        homero: "#FFE602",
        sky: "#29C2FF",
        coral: "#FF7262",
        slime: "20FC8F",
      },
    },
  },
  plugins: [],
};
