/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      'primary_color':'#71C6A7',
      'secondry_color':"#273C73"
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

