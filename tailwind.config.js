/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'screen-1/3': '33vw'
      },
      height: {
        'screen-3/4': '75vh'
      }
    },
  },
  plugins: [],
}
