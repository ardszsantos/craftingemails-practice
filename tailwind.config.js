module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#222D38',
        'light-dark': '#46586B',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #429A84 0%, #31E9A7 100%)',
      },
    },
  },
  plugins: [],
}
