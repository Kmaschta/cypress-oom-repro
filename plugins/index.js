const wp = require('@cypress/webpack-preprocessor');

module.exports = on => {
    const options = {
        webpackOptions: require('../webpack.config'),
    };

    on('file:preprocessor', wp(options));

    on('before:browser:launch', (browser = {}, args) => {
        if (browser.name === 'chrome') {
            args.push('--ignore-certificate-errors');
            args.push('--allow-insecure-localhost');
            args.push('--reduce-security-for-testing');
            args.push('--allow-running-insecure-content');
            args.push('--accept-insecure-certs');
            return args
        }
    });
}
