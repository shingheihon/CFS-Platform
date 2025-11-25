/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          cream: '#FDFBF7',
          blue: '#003366',
          yellow: '#FFC107',
        }
      }
    },
  },
  plugins: [],
}