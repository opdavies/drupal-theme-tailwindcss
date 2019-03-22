let mix = require('laravel-mix');

mix.postCss('src/main.css', 'dist', [
  require('tailwindcss')('./tailwind.config.js'),
])
