/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#6F1028',
        burgundyDark: '#3B0718',
        gold: '#C8A15A',
        champagne: '#E8D5AF',
        ivory: '#F8F5EF',
        white: '#FFFFFF',
        charcoal: '#242124',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'super-wide': '0.35em',
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(59, 7, 24, 0.07)',
        'elevated': '0 30px 60px -20px rgba(59, 7, 24, 0.12)',
        'gold-glow': '0 0 25px rgba(200, 161, 90, 0.25)',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
      }
    },
  },
  plugins: [],
}
