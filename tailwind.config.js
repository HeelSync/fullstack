/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      pizza: "Roboto"
    },
    
    extend: {
      height: {
        screen: "100dvh",
    },
      colors: {
        carolina: {
          blue: "#4B9CD3",
          navy: "#13294B",
          tarheelblue: "#7BAFD4"
        },
      },
  
  },
  },
  plugins: [],
}

