const wc = require('webpack-config');

module.exports = function(env) {
    const config = {
        allwaysThere: true
    };

    if(env && env.hello) {
        config.hello = true;
    }

    console.log('env variables:', env);

    return new wc.Config().merge(config);
}