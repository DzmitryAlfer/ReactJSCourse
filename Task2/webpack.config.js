const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

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

    plugins: [
        new HtmlWebpackPlugin({
          title: "Task2",
          hash: true,
          template: "./index.html"
        })
      ],
    
    mode: 'development',
    devtool: "none",

    watch: false
};