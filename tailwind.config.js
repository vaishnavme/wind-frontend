module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-900": "#131311",
        "dark-800": "#2c2c2e",
        "blue-dark": "#0a84ff",
        "blue-light": "#32ade6"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}