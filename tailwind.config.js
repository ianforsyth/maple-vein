module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      base: '#252525',
      primary: '#299CA2',
      primaryHover: '#2eb0b6',
      gray: '#C5C5C5',
      white: '#FFFFFF',
      danger: 'red'
    },
    extend: {
      fontFamily: {
        lato: ["Lato", "cursive"],
        bitter: ["Bitter", "cursive"],
      },
      animation: {
        fade: 'fadeIn .25s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: '100%' },
        },
      },
    },
  },
  variants: {
    margin: ['first'],
    extend: {},
  },
  plugins: [],
}
