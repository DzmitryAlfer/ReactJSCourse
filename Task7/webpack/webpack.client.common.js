const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(
    common,
    {
        entry: ['babel-polyfill', './js/index.jsx'],
        
        name: 'client',
        target: 'web',
    },
);
