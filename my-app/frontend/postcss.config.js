module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss": {},
    "postcss-flexbugs-fixes": {},
    "postcss-nested": {},
    "postcss-preset-env": {
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
    "autoprefixer": {},
  },
}
