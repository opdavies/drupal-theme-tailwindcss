let mix = require('laravel-mix');

require('laravel-mix-tailwind');

mix.postCss('src/main.css', 'dist')
  .tailwind();
