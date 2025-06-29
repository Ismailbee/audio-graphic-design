/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@ionic/vue/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // overrides `font-sans`
      },
      colors: {
        primary: '#502800',
        contrast: '#BA6900',
        brown: '#BA6900', // Add this line
      },
    },
  },
  plugins: [],
}
