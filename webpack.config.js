const environment = require('webpack-config').environment,
    Config = require('webpack-config').Config;

environment.setAll({
    env: function() {
        return process.env.WEBPACK_ENV || process.env.NODE_ENV || 'development';
    }
});

module.exports = new Config().extend('./[env].config.js');