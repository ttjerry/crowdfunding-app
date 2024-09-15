/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'headerNav':"url('public/images/image-hero-desktop.jpg')",
      }
    },
  },
  plugins: [],
}

