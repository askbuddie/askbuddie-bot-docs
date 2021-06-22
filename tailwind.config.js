module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#ca322f'
        }
      },
      fontFamily: {
        heading: ['Raleway'],
        body: ['Roboto']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
