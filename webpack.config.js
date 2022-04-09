const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    //mode: 'development',
    entry: './src/index.js',
    //devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'a test web page for various web techniques',
            filename: 'webtest.html',
            template: 'template/webtest.html'
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                // this is so that we can compile any React,
                // ES6 and above into normal ES5 syntax
                test: /\.(js|jsx)$/,
                // we do not want anything from node_modules to be compiled
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
};
