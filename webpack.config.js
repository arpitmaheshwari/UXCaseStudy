var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        'main': path.join(__dirname, 'src/index.js')
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            data: `
                                @import '${'src/scss/settings/imports'}';
                            `,
                        },
                    },
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.twig$/,
                use: [
                    'babel-loader', 
                    {
                        loader: 'melody-loader',
                        options: {
                            plugins: ['idom']
                        }
                    }
                ]
            },
        ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      watchOptions: {
        ignored: /node_modules/,
      },
      overlay: false,
    }
};
