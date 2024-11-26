/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yoakum: {
          blue: '#00A3E0',
          orange: '#FFA300',
          green: '#7AB800',
          black: '#1A1A1A',
        }
      }
    },
  },
  plugins: [],
};