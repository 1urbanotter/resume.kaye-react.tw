/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(21, 34, 66)',
        secondary: 'rgb(128, 235, 165)',
      },
    },
  },
  plugins: [],
}