const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    "mode": "development",
    "entry": {
        index: './src/index.js'
    },
    "devtool": "inline-source-map",
    "devServer": {
        static: "./dist"
    },
    "output": {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    "plugins": [
        new HtmlWebpackPlugin({
            title: 'Vintrace Coding Challenge - Alec Goodsell',
            template: './src/index.html'
        })
    ],
    "module": {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node-modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", { runtime: "automatic" }]
                        ],
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ["file-loader"]
            }
        ]
    }
};