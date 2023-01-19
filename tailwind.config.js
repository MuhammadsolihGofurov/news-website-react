/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'red': {
          500 : "rgba(214, 25, 53 , 0.5)",
          700 : "rgb(214, 25, 53)",
          900 : "rgba(214, 25, 53 , 0.9)",
        },
        'black': '#242424',
        'gray': {
          500: 'rgb(143, 143, 143)',
          700: '#5a5a5a',
          900: 'rgb(143, 143, 143)',
        },
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        lg : "1.25rem" ,
        xl: '1.5rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
        '4xl': '4rem',
      },
      padding: {
        '5px': '5px',
        '10px' : '10px',
        '20px' : '20px',
        '30px' : '30px',
        '40px' : '40px',
        '50px' : '50px',
      },
      height: {
        'md': '12.5rem',
        'lg': '15.625rem',
        'xl': '18.75rem',
        'big': '25rem',
      }
    },
    screens: {
      'sm': '468px',
      // => @media (min-width: 468px) { ... }

      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
}