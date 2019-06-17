let mix = require('laravel-mix');

mix.postCss('src/tailwind.css', 'dist', [
  require('tailwindcss')('./tailwind.config.js'),
])
