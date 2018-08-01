const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(
    common,
    {
        name: 'client',
        target: 'web',
    },
);
