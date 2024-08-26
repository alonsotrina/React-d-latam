/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
    },
    colors: {
      "primary": "#0C6DFD",
      "primary-subtle": "#CFE1FE",
      "secondary": "#6C757D",
      "secondary-subtle": "#E2E3E5",
      "success": "#198753",
      "success-subtle": "#D1E6DD",
      "danger": "#DC3444",
      "danger-subtle": "#F8D7D9",
      "warning": "#FFC007",
      "warning-subtle": "#FFF2CD",
      "info": "#10CAF0",
      "info-subtle": "#CEF4FC",
      'white': '#ffffff',
      "dark": {
        100: "#F8F9FA",
        200: "#E9ECEF",
        300: "#CED4D9",
        700: "#212529",
        900: "#000000",
      }
      // 'danger': 'rgb(220 38 38)',
      // 'blue': '#1fb6ff',
      // 'purple': '#7e5bef',
      // 'pink': '#ff49db',
      // 'orange': '#ff7849',
      // 'green': '#13ce66',
      // 'yellow': '#ffc82c',
      // 'gray-dark': '#273444',
      // 'gray': '#8492a6',
      // 'gray-light': '#d3dce6',
      // 'white': '#ffffff',
      // 'neutral': {
      //     100: 'rgb(163 163 163);',
      //     700: 'rgb(64 64 64)',
      //   },
      // 'border': 'rgb(64 64 64 / 0.2);',
      // dark: 'rgb(0 0 0)',
      // primary: '#3490dc',
      // secondary: '#ffed4a',
    },
    extend: {
    },
  },
  plugins: [require("tailwindcss-animate")],
}
