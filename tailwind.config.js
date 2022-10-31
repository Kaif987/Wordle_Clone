/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      lineHeight: {
        "tighter": '.5rem'  
      },
      fontFamily: {
        "times": "times new roman"
      },
      colors:{
        "incorrect": "#787c7e",
        "correct": "#538d4e",
        "correctlyPlaced": "#c9b458"
      }
    },
  },
  plugins: [],
}
