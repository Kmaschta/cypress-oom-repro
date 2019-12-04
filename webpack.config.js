const { EnvironmentPlugin } = require('webpack');

module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'ts-loader'
                }],
            },
        ],
    },
    plugins: [
        new EnvironmentPlugin([
            'NODE_ENV',
        ]),
    ]
}
