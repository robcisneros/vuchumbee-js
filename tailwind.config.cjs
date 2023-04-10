/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'rojo':'#d00000',
        'naranja':'#fb8500',
        'verde':'#38b000',
        'rosaFuerte': '#b5838d',
        'rosaClaro': '#ffcdb2',
      },
    },
  },
  plugins: [],
}
