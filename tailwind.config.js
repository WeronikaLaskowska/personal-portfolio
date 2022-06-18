/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  colors: {
    ...defaultTheme.colors,
    primary: "#000000",
    secondary: "#6f7073",
    "dark": "#071108",
    "brightRed":"#EC615B",
    "brightPurple":"#5222D0",
    "lightBlue":"#C7DBE6",
    "lightPink":"#DCD5DD"
  },
  plugins: [],
}