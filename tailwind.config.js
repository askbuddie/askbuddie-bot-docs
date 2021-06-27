module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: {
          400: '#ca322f'
        },
        lightRed: 'rgba(255,210,210,.46)'
      },
      fontFamily: {
        heading: ['Raleway'],
        body: ['Roboto']
      },
      zIndex: {
        '-1': '-1'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
