const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack'); // eslint-disable-line
    const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line
    const webpackHotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line
    const webpackHotServerMiddleware = require('webpack-hot-server-middleware');    // eslint-disable-line
    let webpackConfig = require('../webpack');    // eslint-disable-line

    if (typeof webpackConfig === 'function') {
        webpackConfig = webpackConfig(null, { mode: process.env.NODE_ENV });
    }

    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler));
    app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
    app.use(webpackHotServerMiddleware(compiler));
} else {
    //  const serverRenderer = require('../public/js/serverRenderer').default;

    app.use(express.static('public'));
    //  app.use(serverRenderer());
}

module.exports = app;
