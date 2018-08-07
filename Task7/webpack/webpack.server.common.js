const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const common = require('./webpack.common.js');

module.exports = merge(
    common,
    {
        entry: ['babel-polyfill', './js/serverRenderer.js'],

        name: 'server',
        target: 'node',

        externals: [nodeExternals()],
        output: {
            filename: 'js/serverRenderer.js',
            libraryTarget: 'commonjs2',
        },

        module: {
            rules: [
              {
                test: /\.css$/,
                include: /src/,
                use: [
                  'css-loader/locals', // It doesn't embed CSS but only exports the identifier mappings.
                ],
              },
            ],
          },
    },
);
