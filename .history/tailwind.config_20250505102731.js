module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Remplacez 'purge' par 'content'
    theme: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
  };