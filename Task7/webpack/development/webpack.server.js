const merge = require('webpack-merge');

const commonServerConfig = require('../webpack.server.common');

module.exports = merge(commonServerConfig, {
    mode: 'development',
    devtool: 'source-map',
});