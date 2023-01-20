/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./src/components/*.jsx", "./src/*.jsx"],
  theme: {
    colors: {
      ...colors,
      'primary': '#1d428a'
    },
  },
  //plugins: [require("daisyui")],
  plugins: []
}