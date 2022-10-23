/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      lineHeight: {
        "tighter": '.5rem'  
      },
      fontFamily: {
        "times": "times new roman"
      }
    },
  },
  plugins: [],
}
