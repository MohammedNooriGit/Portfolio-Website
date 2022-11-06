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
      dfirst: "#142850",
      dsecond: "#1363DF",
    },
    fontFamily: {
      Montserrat: "Montserrat",
      Poppins: "Poppins",
      Raleway: "Raleway",
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6419E6",

          secondary: "#142850",

          accent: "#1FB2A6",

          neutral: "#191D24",

          "base-100": "#2A303C",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
