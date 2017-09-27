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
            uglifyOptions: {
                mangle: { properties: {reserved: ['$super', '$', 'exports', 'require'] }},
                ecma: 8,
                compress: { warnings: false },
                output: {
                    comments: false,
                    beautify: false
                }
            },
            parallel: {
                cache: true
            },
            sourceMap: true
        })
    ]
});