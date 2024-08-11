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
        banner: "url('/Images/bg_banner.png')",
        banner2: "url('/Images//banner.jpeg')",
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
