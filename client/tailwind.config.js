/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js}",
    "./src/*.{js,jsx}",
],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'primary': '#FF9F15',
        'headingColor': '#212C47',
        'balablue': '#1F2B4A',
        'bulaba': '#0c1325',
        'secondary': '#4F5871'
      }
    },
  },
  plugins: [],
}
