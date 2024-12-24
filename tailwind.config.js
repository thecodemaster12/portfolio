/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
        'pally': ['Pally', 'sans-serif'],
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(20deg)' },
        },
        hero_banner: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(50px, -30px)' },
          '50%': { transform: 'translate(-40px, 20px)' },
          '75%': { transform: 'translate(30px, 10px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        wave: 'wave 2s ease-in-out infinite',
        hero_banner: 'hero_banner 10s ease-in-out infinite',
      },
    },
    colors: {
      'primary': '#6C63FF',
      'secondary': '#3F3D56',
      'dark': '#262534',
    },
  },
  plugins: [],
}