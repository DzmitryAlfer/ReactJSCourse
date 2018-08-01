//  const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('../webpack.common.js');

module.exports = merge(
    common,
    {
        name: 'client',
        target: 'web',

        entry: ['webpack-hot-middleware/client'],
        //  entry: ['webpack-hot-middleware/client', 'babel-polyfill', './js/index.jsx'],

        /*  output: {
            path: path.resolve(__dirname, '../../debug'),
        },  */

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
        ],

        mode: 'development',
        devtool: 'source-map',
    },
);
