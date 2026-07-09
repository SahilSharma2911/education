/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/Images/bg_banner.png')",
        banner2: "url('/Images//banner.jpeg')",
        banner2c: "url('/Images//banner-crop.jpeg')",
      },
      fontFamily: {
        inria: ["Inria Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
