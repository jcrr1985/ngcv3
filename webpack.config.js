const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'public_html/js'),
        filename: 'app.js'
    },
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: { presets: [
                        ['@babel/preset-env']
                    ] }
            }
        }]
    }
}