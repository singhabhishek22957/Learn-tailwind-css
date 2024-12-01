/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
        xs: "350px",      // Extra Small screens (up to 576px)
        sm: "577px",      // Small screens (577px to 768px)
        md: "769px",      // Medium screens (769px to 992px)
        lg: "993px",      // Large screens (993px to 1200px)
        xl: "1201px"      // Extra Large screens (1201px and above)
      },
      spacing: {
      '1': '88px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    
    extend: {
      colors:{
      abhi:{
        100:"#f47a0e"
      }

    }

    },
  },
  plugins: [],
}

