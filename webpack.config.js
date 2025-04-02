const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "app"), // ✅ تصحيح المسار
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {

                test: /\.(sass|css|scss)$/,
    
                use: [
    
                  MiniCssExtractPlugin.loader,
    
                  "css-loader",
    
                  "sass-loader",
    
                ],
    
              },    
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
        ]
    },
    devServer: {
        static: path.join(__dirname, "app"), // ✅ استبدال contentBase بـ static
        compress: true,
        port: 8081,
        open: true,
        devMiddleware: {
            writeToDisk: true // ✅ إصلاح writeToDisk
        }
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new OptimizeCSSAssetsPlugin({}),
        new MiniCssExtractPlugin({
            filename: "assets/css/style.css"
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        // new HtmlWebpackPlugin({
        //     filename: "orders.html",
        //     template: "./src/orders.html",
        // }),
        // new HtmlWebpackPlugin({
        //     filename: "products.html",
        //     template: "./src/products.html",
        // }),
        // new HtmlWebpackPlugin({
        //     filename: "user.html",
        //     template: "./src/user.html",
        // }),
        // new HtmlWebpackPlugin({
        //     filename: "add-product.html",
        //     template: "./src/add-product.html",
        // }),
        // new HtmlWebpackPlugin({
        //     filename: "add-user.html",
        //     template: "./src/add-user.html",
        // }),
    ]
};