/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
  fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
       screens: {
        'lg-mid': '1400px',     // Custom point in between lg and xl
        'md-mid': '1024px',     // Custom point in between md and lg
        'sm-mid': '640px',      // Custom point in between sm and md
        'xs': '480px',          // Custom point for extra small screens
      },
      animation: {
        'twinkling': 'twinkling 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'lightning': 'lightning 4s linear infinite',
        'pulseCustom': 'pulseCustom 4s ease-in-out infinite',
        'spin-once': 'spin-once 0.5s ease-in-out',
      },
      keyframes: {
        twinkling: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.2' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        lightning: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '0.1' },
        },
        pulseCustom: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.2' },
        },
        'spin-once': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
} 