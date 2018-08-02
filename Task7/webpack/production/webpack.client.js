const path = require('path');
const merge = require('webpack-merge');
const common = require('../webpack.client.common.js');

module.exports = merge(
    common,
    {
        output: {
            path: path.resolve(__dirname, '../../public/production'),
        },
    },
);
