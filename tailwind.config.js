/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        purple: "#6a00f4",
        lightpurple:"#c200fb",
        blue: '#2cbce9',
        darkblue: '#240046',
        red: '#DC4492',
        yellow: '#fdcc49',
        grey: "ededed",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
          "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #6a00f4 117.73%)",
          "gradient-blue":
          "linear-gradient(90deg, rgba(44,188,233,1) 0%, rgba(48,142,200,1) 0%, rgba(220,68,146,1) 100%, rgba(58,23,114,1) 100%);"
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      content: {
        brush: "url('./assets/brush.png')",
        brush1: "url('./assets/brush1.png')",
        brush2: "url('./assets/brush2.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
        person4: "url(./assets/NataliaAvelarHeadshot.svg)",
        person5: "url(./assets/CarlosVargasHeadshot.svg)"

      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1536px"
      
    }
  },
  plugins: [],
}
