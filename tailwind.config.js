const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        verde: '#93BD15',
        'verde-0': '#93BD15',
        'verde-1': '#A3BD15',
        'verde-2': '#B3BD15',
        'verde-3': '#C3BD15',
        'verde-4': '#D3BD15',
        'roxo-stoque': '#985fb3',
        'vermelho-4': '#FF8041',
        'vermelho-3': '#FF6032',
        'vermelho-2': '#FF4023',
        'vermelho-1': '#FF3014',
        'vermelho-0': '#FF1005',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even'],
    },
  },
  plugins: [],
};
