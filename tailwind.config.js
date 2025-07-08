/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Roboto', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          black: '#000000',
          white: '#FFFFFF',
        }
      },
      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.9)',
        'glass-95': 'rgba(255, 255, 255, 0.95)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 