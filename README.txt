DESCRIPTION
-----------

Tailwind CSS Starter Kit Theme for Drupal 8.

USAGE
-----

```
mkdir -p themes/custom
cd themes/custom
git clone https://git.drupal.org/sandbox/opdavies-3015651 tailwindcss
```

To re-compile the CSS:

```
npm install
npm run build
```

DEPENDENCIES
------------

- Laravel Mix (https://github.com/JeffreyWay/laravel-mix) for PostCSS compiling
  and asset generation.
- The Laravel Mix Tailwind plugin.

CONFIGURATION OVERRIDES
-----------------------

Overrides made to the default tailwind.js file:

- `options.prefix` has been changed to `tw-`. This is so that some of
  Tailwind's default classes like `block` don't apply to Drupal's default
  markup.
- `options.important` has been changed to `true`.
