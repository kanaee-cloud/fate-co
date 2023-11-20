module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Noto Sans JP',
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
        services: "url('./assets/services.gif')",
      },
    },
  },
  plugins: [],
};
