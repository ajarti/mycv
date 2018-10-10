let mix = require('laravel-mix');
mix
    /* CSS */
    .sass('resources/assets/sass/main.scss', 'public/css/dashmix.css').version()
    .sass('resources/assets/sass/dashmix/themes/xmodern.scss', 'public/css/themes/').version()
    .copy('resources/assets/css/overrides.css', 'public/css/overrides.css').version()

    /* JS */
    .js('resources/assets/js/app.js', 'public/js').version()
    .js('resources/assets/dashmix/app.js', 'public/js/dashmix.app.js').version()

    /* Options */
    .options({
        processCssUrls : false
    });
