const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette"
const svgToDataUri = require("mini-svg-data-uri")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./partials/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin 3s linear infinite",
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.5rem" }],
        sm: ["0.875rem", { lineHeight: "1.5rem" }],
      },

      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        lead: ["Mona Sans", ...defaultTheme.fontFamily.sans],
        mono: ["SF Mono", ...defaultTheme.fontFamily.sans],
        display: [["Mona Sans", ...defaultTheme.fontFamily.sans], { fontVariationSettings: '"wdth" 125' }],
      },

      colors: {
        accent: colors.cyan,
      },

      opacity: {
        2.5: "0.025",
        15: "0.15",
      },

      animation: {
        marquee: "marquee 30s linear infinite",
      },

      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke="${value}" fill="none"><path d="M64 0H0V64"/></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: ["color"],
        },
      )

      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundSize: value,
          }),
        },
        {
          values: theme("spacing"),
          type: ["number", "length", "any"],
        },
      )
    }),
  ],
}
