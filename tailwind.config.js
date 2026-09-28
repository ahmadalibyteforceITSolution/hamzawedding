/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf9f1',
          100: '#f6f1de',
          200: '#ede0be',
          300: '#e1cb97',
          400: '#d4b370',
          500: '#c59b4c',
          600: '#b0823c',
          700: '#8e6330',
          800: '#754f2c',
          900: '#624127',
        },
        burgundy: {
          50: '#fdf3f4',
          100: '#fce5e8',
          200: '#facfd4',
          300: '#f5aab4',
          400: '#ee7789',
          500: '#e24c64',
          600: '#cb2f4b',
          700: '#ab213b',
          800: '#8d1f34',
          900: '#771e30',
          950: '#430a15',
        },
        rosewood: '#651c27',
        champagne: '#fbf8f2',
        ivory: '#fefdfa',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Alex Brush"', '"Great Vibes"', 'cursive'],
        arabic: ['"Amiri"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
        display: ['"Cinzel Decorative"', '"Playfair Display"', 'serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'swing': 'swing 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        }
      }
    },
  },
  plugins: [],
}
