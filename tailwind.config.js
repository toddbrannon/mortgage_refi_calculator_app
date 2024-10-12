/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",       // All EJS files in views directory
    "./src/**/*.js",          // Include any JS files in the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
