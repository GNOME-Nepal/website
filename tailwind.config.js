/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        black: "#1E1E1E",
        white: "#FFFFFF",
        orange: {
          normal: "FF7800",
          light: "rgba(255, 120, 0, 0.22)",
        },
        purple: {
          normal: "#9141AC",
          light: "rgba(209, 157, 226, 0.51)",
        },
        green: {
          normal: "#33D17A",
          light: "rgba(69, 239, 145, 0.22)",
        },
        gray: "rgba(217, 217, 217, 1)",
      },
    },
  },
  plugins: [],
};
