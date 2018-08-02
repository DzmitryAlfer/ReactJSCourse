const path = require('path');
//  const webpack = require('webpack');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '../src'),

    output: {
        publicPath: '/',
        filename: 'js/index.js',
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                // use: ExtractTextPlugin.extract({
                //   fallback: "style-loader",
                //   use: "css-loader"
                // })
            },
        ],
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        /*new HtmlWebpackPlugin({
            title: 'Task7',
            hash: true,
            template: './index.html',
        }),*/
    ],

    //  remove below
    /* mode: process.env.NODE_ENV,

    plugins: [
        isDevMod ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
    ], */
};
