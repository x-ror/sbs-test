const cssnano = require('cssnano')({ preset: 'default' });

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./src/**/*.svelte', './src/**/*.html'],
    keyframes: true,
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
    plugins: [purgecss, cssnano]
};