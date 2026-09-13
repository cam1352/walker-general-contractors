/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        walker: {
          green: "#8CC63F",      // Official Logo Green
          greenHover: "#7CB334", // Darker hover green
          greenLight: "#A5D85C", // Light accent green
          slate: "#808285",      // Official Logo Slate Grey
          dark: "#0B111E",       // Deep Slate Dark
          navy: "#131C2E",       // Navy Card Surface
          border: "#1E293B"      // Border
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}
