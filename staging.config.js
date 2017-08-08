var path = require('path'),
    webpack = require('webpack'),
    WebpackConfig = require('webpack-config').Config;

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = new WebpackConfig().extend('./base.config.js').merge({
    devtool: 'source-map',
    entry: {
        js: ['./src/client.jsx']
    },
    plugins: [
        new UglifyJSPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            },
            sourceMap: true,
            compress: {
                warnings: false
            }
        })
    ]
});