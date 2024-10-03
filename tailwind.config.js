/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "paysage": "url('/src/assets/pasage.jpg')",
        "paysage_t": "url('/src/assets/t.jpg')",
      }
    },
  },
  plugins: [],
}

