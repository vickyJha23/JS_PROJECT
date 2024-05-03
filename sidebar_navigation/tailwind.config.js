/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
         animation:{
            jump: `jump 1s ease-in-out infinite`
         },
         keyframes:{
            jump:{
               "0% 100%": {
                  transform: "scale(1)"
               },

               "50%": {
                  transform: "scale(1.5)"
               }
            }
         }

    },
  },
  plugins: [],
}

