const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');


module.exports = {
    entry: {
        app: path.join(__dirname, 'src')
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'js/[name].js'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: path.join(__dirname, 'src/components/text.js')
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Vue-webpack template step by step',
            filename: 'index.html',
            inject: true,
            hash: true,
            template: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true

            }
        }),
        new webpack.WatchIgnorePlugin([
            path.join(__dirname,'node_modules')
        ]),
        new ProgressBarPlugin()
    ]
}