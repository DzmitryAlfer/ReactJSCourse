const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env, options) {
    const isProduction = options.mode === 'production';
    //console.error(isProduction ? "run webpack in production mode" : "run webpack in development mode");

    const config = {
        context: path.resolve(__dirname, 'src'),
        entry: ['babel-polyfill', './js/index.js'],

        output: {
            path: isProduction ? path.resolve(__dirname, 'release') : path.resolve(__dirname, 'debug'),
            publicPath: '/',
            filename: 'js/index.js',
        },

        resolve: {
            extensions: ['.js', '.jsx', '.json']
        },

        module:{
            rules:[
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                    // use: ExtractTextPlugin.extract({
                    //   fallback: "style-loader",
                    //   use: "css-loader"
                    // })
                }
            ]
        },

        devServer: {
            historyApiFallback: true
        },

        plugins: [
            new ExtractTextPlugin('[name].css'),
            new HtmlWebpackPlugin({
                title: 'Task2',
                hash: true,
                template: './index.html'
            }),
        ],

        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'none' : 'source-map',

        watch: true
    };

    return config;
};