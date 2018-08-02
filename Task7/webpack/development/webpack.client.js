const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('../webpack.client.common.js');

module.exports = merge(
    common,
    {
        name: 'client',
        target: 'web',

        entry: ['webpack-hot-middleware/client'],
        //  entry: ['webpack-hot-middleware/client', 'babel-polyfill', './js/index.jsx'],

        output: {
            path: path.resolve(__dirname, '../../public/debug'),
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
        ],

        mode: 'development',
        devtool: 'source-map',
    },
);
