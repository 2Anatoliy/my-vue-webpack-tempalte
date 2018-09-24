const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src')
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'js/[name].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Vue-webpack template step by step',
            filename: 'test.html',
            inject: true,
            hash: true,
            template: 'index.html'
        })
    ]
}