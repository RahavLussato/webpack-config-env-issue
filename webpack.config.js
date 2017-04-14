const webpack = require('webpack');
const wc = require('webpack-config');

wc.environment.setAll({
    env: () => process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'
});

// Also you may use `'config/webpack/[NODE_ENV].config.js'`
console.log(JSON.stringify(new wc.Config().extend('webpack.[env].config.js')));
process.exit();
module.exports = new wc.Config().extend('webpack.[env].config.js');