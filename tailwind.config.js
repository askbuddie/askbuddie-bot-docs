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
      },
      backgroundImage: () => ({
        'github-screen': 'url(/imgs/github-screen.png)',
        robot: 'url(/imgs/robot.png)'
      }),
      width: {
        108: '36rem'
      },
      height: {
        104: '32rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
