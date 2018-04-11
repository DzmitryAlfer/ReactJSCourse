const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: "./js/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/index.js"
    },
    
    mode: 'development',

    watch: false
};