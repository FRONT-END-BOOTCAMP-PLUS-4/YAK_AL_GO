// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // ✅ App Router
    './pages/**/*.{js,ts,jsx,tsx}', // (optional, for any old Pages router usage)
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
