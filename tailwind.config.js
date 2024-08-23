/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wakeid-login': "url('/links/wakeid-login.jpg')",
        'wakeid-login-gradient': "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/links/wakeid-login.jpg')",
        // Add more background images here as needed
      },
      colors: {
        carolina: {
          blue: "#4B9CD3",
          navy: "#13294B",
          tarheelblue: "#7BAFD4"
        },
        sidebar: {
          apurwa1: "#AFECFF",
          apurwa2: "#70C3FF"
        },
        better: {
          white: "#f8f8ff"
        }
      },
      boxShadow: {
        bar: '7px 4px 10.8px rgba(0, 0, 0, 0.22)',
        header: '7px 4px 10.8px rgba(0, 0, 0, 0.22)'
      },
      fontFamily: {
        pizza: ['Roboto', 'sans-serif'], // Ensuring fallback to sans-serif
      },
    },
  },
  plugins: [],
}