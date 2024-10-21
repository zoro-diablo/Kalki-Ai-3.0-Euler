/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#4149f5',
        'light-cyan': '#bee4f0',
        'custom-cyan': '#04baba',
        'bright-cyan': '#26c4c1',
        'light-gray': '#c1c1c8',
        'lighter-gray' : '#e1e9f0',
        'dark-gray' : '#89899a',
        'dark-blue': '#0c0e25',
        'primary-bg': '#0c0f24',
        'sky-blue': '#0bb1c4',
        'gradient-start': '#4fd1c5',
        'gradient-end': '#319795',
      },
      backgroundImage: {
        'gradient-button-one':
          'linear-gradient(90deg, #4149f5 0%, #04baba 100%)',
        'gradient-to-r': 'linear-gradient(to right, #4fd1c5, #319795)',
        'gradient-to-r-blue': 'linear-gradient(to right, #3f3db1, #158ca1)',
      },
    },
  },
  plugins: [
  
]
};
