const ClosureCompilerPlugin = require('closure-webpack-plugin');

const path = require('path');
const webpack = require('webpack');
const yargs = require('yargs');
const rimraf = require('rimraf');
const chalk = require('chalk');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const [folderName] = yargs.argv._;

if (!folderName) {
  process.stderr.write(chalk.red(`ERROR: Folder "${chalk.bold(folderName)}" doesn't exists\n`));
  process.exit(1);
}

const outFolderName = 'docs';

rimraf.sync(`${outFolderName}/${folderName}`);

module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', './index'],

  output: {
    path: path.join(__dirname, outFolderName, folderName),
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

  resolve: {
    alias: {
      Presentation: path.resolve(path.join(__dirname, folderName))
    }
  },

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
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              limit: 8192
            }
          }
        ]
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
        ]
      }
    ]
  },

  optimization: {
    minimize: true,

    minimizer: [new ClosureCompilerPlugin()]
  }
};
