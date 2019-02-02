/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project.

View the full documentation at https://tailwindcss.com.
*/

let defaultConfig = require('tailwindcss/defaultConfig')()

// Here you can specify the colors used in your project.
// Either add your own, or override any of the defaults.
const colors = {
  ...defaultConfig.colors,
  // 'drupal-blue': '#0678be',
}

module.exports = {
  ...defaultConfig,

  // Use our colors for text, background and borders.
  colors: colors,
  textColors: colors,
  backgroundColors: colors,
  borderColors: Object.assign({ default: colors['grey-light'] }, colors),

  // Override any options.
  options: {
    ...defaultConfig.options,
    important: true,
    prefix: 'tw-',
  }
}
