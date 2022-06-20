/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        primary: "#000000",
        secondary: "#6f7073",
        dark: "#071108",
        brightRed: "#EC615B",
        brightPurple: "#5222D0",
        lightBlue: "#C7DBE6",
        lightPink: "#DCD5DD",
      },
      inset: {
        'boxie': '5%',
      }
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'twenty': '20px'
    }
  },

  plugins: [],
};
