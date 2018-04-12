const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: "./js/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/index.js"
    },

    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },

    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    
    mode: 'development',

    watch: false
};