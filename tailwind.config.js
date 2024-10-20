/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quickSand: "Quicksand",
      },
      colors: {
        primary: "#f1356d",
        light: "#f2f2f2",
      }
    },
  },
  plugins: [],
};
