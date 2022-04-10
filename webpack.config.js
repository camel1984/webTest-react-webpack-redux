const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    //mode: 'development',
    entry: './src/index.tsx',
    //devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
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
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '*',],
    },
};
