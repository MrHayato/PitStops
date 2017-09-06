const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tslintConfig = require('./tslint.json');

module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch',
            './src/index.tsx'
        ]
    },
    devtool: 'source-map',

    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.[hash].js'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    devServer: {
        port: 9000,
        hotOnly: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            cache: true,
            template: 'src/index.ejs'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEVELOPMENT__: JSON.stringify(true),
        }),
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: ['react-hot-loader/webpack', 'ts-loader'],
                include: [
                    path.resolve('./src')
                ]
            },
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    configuration: tslintConfig
                }
            },
            {
                test: /\.js$/,
                use: 'source-map-loader',
                enforce: 'pre'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    }
}