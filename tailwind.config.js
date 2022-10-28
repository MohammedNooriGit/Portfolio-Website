/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      first: "#5800FF",
      second: "#0096FF",
      third: "#00D7FF",
      fourth: "#72FFFF",
      swhite: "#ffffff",
    },
    fontFamily: {
      Montserrat: "Montserrat",
      Poppins: "Poppins",
      Raleway: "Raleway",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
