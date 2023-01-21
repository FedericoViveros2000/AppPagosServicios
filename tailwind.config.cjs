/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./src/components/*.jsx", "./src/*.jsx"],
  theme: {
    colors: {
      ...colors,
      'primary': '#1d428a',
      'disabled': 'rgba(29,66,138,0.70)',
      'grey': '#f2f2f2'
    },
  },
  //plugins: [require("daisyui")],
  plugins: []
}