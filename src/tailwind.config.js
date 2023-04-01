/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'courgette': ['Courgette'],
      'poppins': ['Poppins'],
      'klee': ['Klee One']
    }
  },
}