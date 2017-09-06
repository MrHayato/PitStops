const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tslintConfig = require('./tslint.json');

module.exports = {
    entry: {
        app: [
            './src/index.tsx'
        ]
    },

    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.[hash].js'
    },

    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },

    plugins: [
        new HtmlWebpackPlugin({
            cache: true,
            template: 'src/index.ejs'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEVELOPMENT__: JSON.stringify(false)
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
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