/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("tw-elements/dist/plugin")
  ],
}

// require("daisyui"), 
    // require("flowbite/plugin"),
    // require("flowbite-react"),
    // 7d8a4a1cebd3ded5e44ad818413d31725ad8f177