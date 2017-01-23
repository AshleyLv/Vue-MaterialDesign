var path = require('path');
module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: './dist',
        publicPath:'dist/',
        filename: 'build.js'
    },
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            { test: /\.vue$/, loader: 'vue' },
            {
                test: /\.(png|jpg|gif)$/,
                loader:'url-loader?limit=8192'
            },
            { test: /\.less$/, loader: 'style!css!less' },
        ]
    },
    babel: {
        presets: ['es2015','stage-0'],
        plugins: ['transform-runtime']
    }
}