var path = require('path'),
    webpack = require('webpack'),
    WebpackConfig = require('webpack-config').Config;

module.exports = new WebpackConfig().merge({
    output: {
        path: path.join(__dirname, './dist/bundledCode'),
        filename: "bundle.js?[hash]" ,
        publicPath: '/'
    },
    node: {
        fs: 'empty'
    },
    externals: [
        {
            './cptable': 'var cptable'
        },
        {
            './jszip': 'jszip'
        }
    ],
    plugins: [
        new webpack.IgnorePlugin(/jsdom$/),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: '[name].js?[hash]'
        })
    ],
    resolve: {
        descriptionFiles: ["package.json"],
        extensions: ['.json', '.js', '.jsx'],
        modules: [path.resolve(__dirname, "../"), "node_modules"]
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use:"babel-loader?compact=false" }
        ]
    }
});