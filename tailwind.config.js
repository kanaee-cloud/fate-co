module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Lexend',
      secondary: 'Lexend',
      tertiary: 'Lexend',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        gray: "#212121",
        primary: '#0a0a0a',
        accent: '	#0092ff',
      },
      backgroundImage: {
        about: "url('./assets/about.jpg')",
        footer: "linear-gradient(rgba(30, 30, 32, 0.7),rgba(30, 30, 32, 0.7)),url(./assets/footer.gif)",
        main: "linear-gradient(rgba(30, 30, 32, 0.7),rgba(30, 30, 32, 0.7)),url(./assets/bg-main.jpg)"
        // services: "url('./assets/services.gif')",
      },
    },
  },
  plugins: [],
};
