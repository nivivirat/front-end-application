/** @type {import('tailwindcss').Config} */
module.exports = {

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#b5d8ff',
        'secondary': '#e4f1ff',
        'ternary': '#5c9ce5'
      },
    },
    fontFamily: {
      custom:['Nunito', "sans-serif"]
    },
  },
  plugins: [require("daisyui"),require('flowbite/plugin')],
}