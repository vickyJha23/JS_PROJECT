/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
       colors:{
         "light-black": "rgba(0, 0, 0, 0.2)"
       }
    },
  },
  plugins: [],
}

