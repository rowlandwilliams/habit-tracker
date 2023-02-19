/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { "dark-blue": "#0e121a", 'mid-blue': '#01050D', 'base-blue': '#1B1F27' },
    },
  },
  plugins: [],
};
