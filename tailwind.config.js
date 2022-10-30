module.exports = {
  darkMode: false,
  purge: {
    enabled: true,
    content: [
      "./src/**/*.{js,jsx}",
    ]
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      // ...
      borderColor: ['focus-visible', 'first'],
      // ...
      textColor: ['visited'],
    }
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
