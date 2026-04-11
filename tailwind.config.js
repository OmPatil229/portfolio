/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#003087',
        'brand-accent': '#AC440D',
        'brand-cream': '#FAF6F1',
        'brand-dark': '#0B0E14',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'magnetic': '0 10px 30px -10px rgba(172, 68, 13, 0.4)',
      }
    },
  },
  plugins: [],
}
