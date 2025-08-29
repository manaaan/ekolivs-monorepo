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
        primary: '#527a5a',
        secondary: '#7d977e',
        grey: '#2e2e2e',
        warm: '#e6b85c',
        earth: '#e07a5f',
        text: '#f4f1ea',
      }
    }
  },
};

module.exports = config;
