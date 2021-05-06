const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: ['@babel/polyfill', 'webpack-hot-middleware/client', 'react-hot-loader/patch'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdown-loader',

            options: {
              gfm: false
            }
          }
        ]
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
        include: __dirname
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'raw-loader'
          }
        ],
        include: __dirname
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              limit: 10000,
              mimetype: 'image/svg+xml'
            }
          }
        ],
        // include: path.join(__dirname, 'assets')
        include: __dirname
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              mimetype: 'image/png'
            }
          }
        ],
        // include: path.join(__dirname, 'assets')
        include: __dirname
      },
      {
        test: /\.gif$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              mimetype: 'image/gif'
            }
          }
        ],
        // include: path.join(__dirname, 'assets')
        include: __dirname
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              mimetype: 'image/jpg'
            }
          }
        ],
        // include: path.join(__dirname, 'assets')
        include: __dirname
      }
    ]
  }
};
