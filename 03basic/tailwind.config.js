/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:
      {
        'xs': '350px',
        'sm': '577px',
        'md': '769px',
        'lg': '993px',
        'xl': '1201px'
      },
      colors:{
        'myColor': '#f47a0e'
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },
    },
  },
  plugins: [],
}

