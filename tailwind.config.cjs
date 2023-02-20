/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#01050D",
        "mid-blue": "#0e121a",
        "base-blue": "#1B1F27",
      },
    },
  },
  plugins: [],
};
