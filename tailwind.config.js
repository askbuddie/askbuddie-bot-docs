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
        brand: {
          300: 'var(--brand-300)',
          400: 'var(--brand-400)',
          500: 'var(--brand-500)',
          'faded-9': 'var(--brand-faded-9)',
          'faded-7': 'var(--brand-faded-7)',
          'faded-5': 'var(--brand-faded-5)',
          'faded-3': 'var(--brand-faded-3)',
          'faded-1': 'var(--brand-faded-1)'
        },
        black: {
          300: 'var(--black-300)',
          400: 'var(--black-400)',
          'faded-9': 'var(--black-faded-9)',
          'faded-7': 'var(--black-faded-7)',
          'faded-5': 'var(--black-faded-5)',
          'faded-3': 'var(--black-faded-3)',
          'faded-1': 'var(--black-faded-1)'
        },
        white: {
          400: 'var(--white-400)',
          500: 'var(--white-500)',
          'faded-9': 'var(--white-faded-9)',
          'faded-7': 'var(--white-faded-7)',
          'faded-5': 'var(--white-faded-5)',
          'faded-3': 'var(--white-faded-3)',
          'faded-1': 'var(--white-faded-1)'
        }
      },
      fontFamily: {
        heading: ['Raleway'],
        body: ['Roboto']
      },
      zIndex: {
        '-1': '-1'
      },
      backgroundImage: () => ({
        'github-screen': 'url(/imgs/github-screen.jpg)',
        robot: 'url(/imgs/robot.jpg)'
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
