const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require('path');

module.exports = {

    entry: './src/index.js',

    output: {

        path: path.resolve(__dirname, '/app'),

        filename: 'app.js'

    },

    module: {

        rules: [

          {

            test: /\.html$/i,

            loader: 'html-loader',

          },
        ]

    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',

        }),
        new HtmlWebpackPlugin({
            filename: 'orders.html',
            template: './src/orders.html',

        }),
        new HtmlWebpackPlugin({
            filename: 'products.html',
            template: './src/products.html',

        }),
        new HtmlWebpackPlugin({
            filename: 'user.html',
            template: './src/user.html',

        }),
        new HtmlWebpackPlugin({
            filename: 'add-product.html',
            template: './src/add-product.html',

        }),
        new HtmlWebpackPlugin({
            filename: 'add-user.html',
            template: './src/add-user.html',

        }),
    ]

}