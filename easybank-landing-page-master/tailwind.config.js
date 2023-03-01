/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js,css}"],
  theme: {
    extend: {
            colors:{
              GrayishBlue: "hsl(233, 8%, 62%)",
              LightGrayishBlue: "hsl(220, 16%, 96%)",
              VeryLightGray: "hsl(0, 0%, 98%)",
              White: "hsl(0, 0%, 100%)",
              DarkBlue: "hsl(233, 26%, 24%)",
              LimeGreen: "hsl(136, 65%, 51%)",
              BrightCyan: "hsl(192, 70%, 51%)",
              },
            fontFamily:{
              'customFont':['Public','Sans']
            },
            backgroundImage:{
              'cash-article':"url('../images/image-currency.jpg')",
              'restaurant-article':"url('../images/image-restaurant.jpg')",
              'plane-article':"url('../images/image-plane.jpg')",
              'confetti-article':"url('../images/image-confetti.jpg')",
              'icon-budgeting':"url('../images/icon-budgeting.svg')",
              'icon-online':"url('../images/icon-online.svg')",
              'icon-api':"url('../images/icon-api.svg')",
              'icon-onboarding':"url('../images/icon-onboarding.svg')",
            }
            },
  },
  plugins: [],
}
