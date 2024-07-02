/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-orange-to-blue": "linear-gradient(45deg, #DE883F, #1B7BD4)",
      },
      boxShadow: {
        "neon-blue": "0 0 10px 3px #1B7BD4",
        "neon-red": "0 0 10px 3px #DE883F",
      },
      colors: {
        "main-orange": "#DE883F",
        "main-blue": "#1B7BD4",
      },
    },
  },
  plugins: [],
};
