

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
        'canvas': "url('/src/backgrounds/CanvasBG.png')",
        'catalog': "url('/src/backgrounds/CatalogBG.png')",
        'cds': "url('/src/backgrounds/CDSBG.png')",
        'connect-carolina': "url('/src/backgrounds/ConnectCarolinaBG.png')",
        'gradescope': "url('/src/backgrounds/GradescopeBG.png')",
        'handshake': "url('/src/backgrounds/HandshakeBG.png')",
        'heelmail': "url('/src/backgrounds/HeelMailBG.png')",
        'heellife': "url('/src/backgrounds/HeelLifeBG.png')",
        'libraries': "url('/src/backgrounds/LibrariesBG.png')",
        'piazza': "url('/src/backgrounds/PiazzaBG.png')",
        'rec': "url('/src/backgrounds/RecBG.png')",
        'my-carolina': "url('/src/backgrounds/MyCarolinaBG.png')",
        'canvas-gradient': `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/src/backgrounds/CanvasBG.png')`,
        'catalog-gradient': `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/src/backgrounds/CatalogBG.png')`,
        'cds-gradient': `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/src/backgrounds/CDSBG.png')`,
        'connect-carolina-gradient': `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/src/backgrounds/ConnectCarolinaBG.png')`,
        'gradescope-gradient': `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/src/backgrounds/GradescopeBG.png')`,
        'handshake-gradient': `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/src/backgrounds/HandshakeBG.png')`,
        'heelmail-gradient': `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/src/backgrounds/HeelMailBG.png')`,
        'heellife-gradient': `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/src/backgrounds/HeelLifeBG.png')`,
        'libraries-gradient': `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/src/backgrounds/LibrariesBG.png')`,
        'piazza-gradient': `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/src/backgrounds/PiazzaBG.png')`,
        'rec-gradient': `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/src/backgrounds/RecBG.png')`,
        'my-carolina-gradient': `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/src/backgrounds/MyCarolinaBG.png')`
      },
      spacing: {
        '128': '34rem',
      },
      colors: {
        carolina: {
          blue: "#4B9CD3",
          navy: "#13294B",
          tarheelblue: "#7BAFD4"
        },
        sidebar: {
          apurwa1: "#AFECFF",
          apurwa2: "#70C3FF",
          apurwa3: "#C1E8F4",
          apurwa4: "#C0E8FF",
          apurwa5: "#44D2FF"
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
        pizza: ['Poppins', 'sans-serif'], // Ensuring fallback to sans-serif
      },
    },
  },
  plugins: [],
}