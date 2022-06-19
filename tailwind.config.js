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
  plugins: [
     plugin =(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
              `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),],
}