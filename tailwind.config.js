module.exports = {
  theme: {
    screens: {
      xs: '350px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    fontFamily: {
      display: ['Ubuntu Condensed', 'sans-serif'],
      body: ['Raleway', 'sans-serif'],
      title: ['Yeseva One', 'sans-serif'],
      sans: ['sans-serif']
    },
    extend: {
      shadows: {
        default: '0 2px 4px 0 rgba(0,0,0,0.10)',
        md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
        lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
        inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
        outline: '0 0 0 3px rgba(52,144,220,0.5)',
        none: 'none'
      },
      colors: {
        theme: {
          // white: '#FAF9F7',
          // black: '#17161E',
          // one: '#1E8492',
          // two: '#708FA3',
          // three: '#526A92'
          // -------- orange highlight
          white: '#f2f7f4',
          black: '#484a4c',
          one: '#bb5274',
          two: '#aec0d8',
          three: '#f87e63'

          // white: '#F3F3F0',
          // black: '#101312',
          // one: '#77B3B2',
          // two: '#7E979E',
          // three: '#8C7D55'
          // white: '#F6F5F5',
          // black: '#2A1D2E',
          // one: '#96445A',
          // two: '#7E7D95',
          // three: '#A59C9C'
        }
      }
    }
  },
  variants: { borderWidth: ['responsive', 'hover', 'focus'] },
  corePlugins: {
    container: false
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          // paddingLeft: '2rem',
          // paddingRight: '2rem',
          '@screen xs': {
            maxWidth: '450px'
          },
          '@screen sm': {
            maxWidth: '700px'
          },
          '@screen md': {
            maxWidth: '768px'
          },
          '@screen lg': {
            maxWidth: '1024px'
          },
          '@screen xl': {
            maxWidth: '1280px'
          }
        }
      });
    }
  ]
};
