// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          playfair: ["Playfair Display", "serif"],
          montserrat: ["Montserrat", "sans-serif"],
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".container": {
          maxWidth: theme("1760px"),
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: theme("80px"),
          paddingRight: theme("80px"),
        },
      });
    }),
    // plugin(function ({ addBase }) {
    //   addBase({
    //     html: { fontSize: '10px' },
    //     body: { fontSize: '1.6rem' }
    //   })
    // })
  ],
};
