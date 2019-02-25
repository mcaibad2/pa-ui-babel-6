const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        library: "pa",
        libraryTarget: "umd",
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(eot|png|jpg|jpeg|svg|[ot]tf|woff2?)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader'
            }
        ]
    },
    externals: [
        "react",
        "rdx",
        { "rdx/semantic-ui-react": "rdxSemanticUIReact" },
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })
    ]
};