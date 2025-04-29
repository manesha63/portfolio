const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    ["tailwindcss", {}],
    ["autoprefixer", {}],
    ["postcss-preset-env", {
      stage: 3,
      features: {
        'nesting-rules': true
      }
    }]
  ],
};
