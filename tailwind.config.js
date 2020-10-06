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
          // white: '#F4F4F1',
          // black: '#524c54',
          // one: '#a0aa8a',
          // two: '#858884',
          // three: '#938075'
          // white: '#f2f7f4',
          // black: '#484a4c',
          // one: '#bb5274',
          // two: '#aec0d8',
          // three: '#f87e63'
          // white: '#E8E1D2',
          // black: '#1E2927',
          // one: '#DA2724',
          // two: '#978672',
          // three: '#CA8241'
          // white: '#F5F6F0',
          // black: '#37322A',
          // one: '#B49D6B',
          // two: '#74694E',
          // three: '#969292'
          // white: '#E4E1C4',
          // black: '#47232E',
          // one: '#6C59B9',
          // two: '#1CB0CF',
          // three: '#D7838C'
          // white: '#E9F1F3',
          // black: '#1F1B21',
          // one: '#2AA0C9',
          // two: '#74B6BD',
          // three: '#605F6E'
          // white: '#F8F9F7',
          // black: '#734E6D',
          // three: '#AABB91',
          // one: '#C75A51',
          // two: '#C3A48C'
          // white: '#E4E5C0',
          // black: '#734E6D',
          // one: '#1ED4C9',
          // two: '#889A9D',
          // three: '#7E8B52',
          // white: '#F1F2F2',
          // black: '#2B2546',
          // one: '#ED2381',
          // three: '#787671',
          // two: '#923EBE'
          // white: '#F3F3F0',
          // black: '#101312',
          // one: '#77B3B2',
          // two: '#7E979E',
          // three: '#8C7D55'
          white: '#F6F5F5',
          black: '#2A1D2E',
          one: '#96445A',
          two: '#7E7D95',
          three: '#A59C9C'
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
