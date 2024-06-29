/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
        customGreen: 'hsla(149, 67%, 85%, 0.679)',
        customBlack: 'hsla(0, 0%, 0%, 0.771)',
        headingGreen: 'hsl(148, 100%, 19%)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      textShadow: {
        'custom': '3px 3px 5px rgba(0, 0, 0, 0.3)',
        'custom-additional': '3px 3px 5px rgba(66, 60, 60, 0.051)', // Added text-shadow variant
      },
  },
  plugins: [function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          textShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-custom-additional': {
          textShadow: '3px 3px 5px rgba(66, 60, 60, 0.051)',
        },
      });
    },],
}

}

