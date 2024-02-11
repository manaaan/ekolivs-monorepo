const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#f0fafb',
          100: '#daf1f3',
          200: '#b9e2e8',
          300: '#89cdd7',
          400: '#49abbc',
          500: '#3692a4',
          600: '#2f788b',
          700: '#2c6272',
          800: '#2b515f',
          900: '#284551',
          950: '#162d36',
      },
        secondary: {
          50: '#f4f7f7',
          100: '#e2eaeb',
          200: '#c8d8d9',
          300: '#a2bcbe',
          400: '#75989b',
          500: '#5a7d80',
          600: '#4d686d',
          700: '#3f5256',
          800: '#3c4b4e',
          900: '#354144',
          950: '#20282c',
      }
      }
    }
  }
};

module.exports = config;
