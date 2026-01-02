/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // El <alpha-value> permite que Tailwind aplique opacidad (ej. primary/50)
        primary: "rgb(var(--color-primary) / <alpha-value>)",
      },
    },
  },
  plugins: [
    // Set a default value on the `:root` element
    ({ addBase }) =>
      addBase({
        ":root": {
          "--color-values": "255 172 0",
        },
      }),
  ],
}

