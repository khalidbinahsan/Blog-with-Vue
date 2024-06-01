/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        '2xl': '1300px'
      }
    }
  },
  plugins: [],
}