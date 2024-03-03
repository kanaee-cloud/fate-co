module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Pixelify Sans',
      tertiary: 'Poppins',
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
        site: "#242F49",
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        about: "url('./assets/about.jpg')",
        footer: "linear-gradient(rgba(30, 30, 32, 0.7),rgba(30, 30, 32, 0.7)),url(./assets/footer.gif)"
        // services: "url('./assets/services.gif')",
      },
    },
  },
  plugins: [],
};
