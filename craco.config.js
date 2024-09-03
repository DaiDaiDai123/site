const plugin = require("tailwindcss");
const { postcss } = require("tailwindcss");

module.exports = {
    style: {
        postcss: {
            plugin: [
                require('tailwindcss'),
            ],
        },
    },
}