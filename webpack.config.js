 const HtmlWebpackPlugin = require('html-webpack-plugin');


 module.exports = {
     entry: './src/app.js',
     output: {
         path: __dirname + '/build',
         filename: 'bundleyes.js'
     },
     devServer: {
         port: 1950
     },
     module: {
         rules: [{
                 test: /\.css$/,
                 use: [
                     { loader: 'style-loader' },
                     { loader: 'css-loader' }
                 ]
             },
             {
                 test: /\.(gif|png|jpe?g|svg)/i,
                 use: [
                     'file-loader',
                     {
                         loader: 'image-webpack-loader',
                         options: {
                             gifsicle: {
                                 interlanced: false
                             },
                             optipng: {
                                 optimizationLevel: 7
                             },
                             pngquant: {
                                 quality: '65-90',
                                 speed: 4
                             },
                             mozjpeg: {
                                 progressive: true,
                                 quality: 65
                             }

                         }
                     }
                 ]
             }
         ]
     },
     plugins: [
         new HtmlWebpackPlugin({
             template: './index.html'
         })
     ]

 };