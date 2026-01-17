/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#2F3A8F',
        'teal': '#00B4A6',
        'purple-accent': '#6B5CFF',
      },
      fontFamily: {
        'hebrew': ['Assistant', 'Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
