/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#080A1C",
        "mid-blue": "#0D1334",
        "base-blue": "#192142",
        'purple': '#5131FF'
      },
    },
  },
  plugins: [],
};
