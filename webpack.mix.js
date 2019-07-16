let mix = require('laravel-mix');

mix.postCss('src/tailwind.css', 'dist', [
  require('tailwindcss'),
])

/**
 * Uncomment the following lines to enable PurgeCSS.
 *
 * This which remove any classes that are not found within the templates
 * directory from the compiled CSS stylesheets inside the 'dist' directory.
 * Thus reducing the resulting file size.
 *
 * Any classes added programatically (e.g. within a preprocess function defined
 * within a module or a *.theme file will need to be added to
 * 'whitelistPatterns' or 'whistlistPatternsChildren'. For more information on
 * whitelisting, see https://www.purgecss.com/whitelisting.
 */
// require('laravel-mix-purgecss')
// mix.purgeCss({
//   folders: ['templates'],
//   extensions: ['html', 'php', 'twig'],
//   whitelistPatterns: [],
//   whitelistPatternsChildren: []
// })
