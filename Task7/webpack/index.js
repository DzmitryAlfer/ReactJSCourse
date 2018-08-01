const devConfigs = require('./development');
const prodConfigs = require('./production');

module.exports = function webpackConfig(env, options) {
    const isProduction = options.mode === 'production';

    console.info(`Run webpack in ${isProduction ? 'production' : 'development'} mode`); // eslint-disable-line

    const config = isProduction ? prodConfigs : devConfigs;

    console.info(config); // eslint-disable-line

    return config;
};
