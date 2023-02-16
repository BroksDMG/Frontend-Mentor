/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./builid/*.html"],
  theme: {
    extend: {
      colors:{
        darkGray: 'hsl(0, 0%, 59%)',
        DarkCyan: "hsl(185, 75%, 39%)",
        VeryDarkDesaturatedBlue: "hsl(229, 23%, 23%)",
        DarkGrayishBlue: "hsl(227, 10%, 46%)"
      }
    },
  },
  plugins: [],
}
