/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      firstBlue: "#8CB9BD",
      firstWhite: "#4F6F52",
      firstOrange: "#ECB159",
      secondOrange: "#E6BAA3",
      darkBlue: "#35374B",
      firstRed: "#B67352",
      buttonColor: "#9BB0C1",
      textGrey: "#5F8670",
      textDark: "#31363F",
      textWhite: "#EEEEEE",
      linearFirst: "#FEFBF6",
      linearSecond: "#ECB159",
      linearThird: "#B67352"
    }, 
  },
  plugins: [],
}

