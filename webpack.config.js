const path = require('path');
const webpack = require('webpack');
const port = process.env.DEV_SERVER || 3000;
const webpackDevServer = require('webpack-dev-server');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const FriendlyErrors = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV !== 'production';

const webpackConfig = {
  entry: path.resolve(__dirname, './src/scripts/app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.min.js'
  },
  watch: isDev,
  mode: process.env.NODE_ENV,
  devtool: isDev && 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev
            }
          }
        ]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: path.resolve(__dirname, '/src/index.html')
    }),

    new MiniCssExtractPlugin({
      filename: 'app.min.css'
    }),

    new WebpackNotifierPlugin({
      title: 'Webpack',
      excludeWarnings: true,
      alwaysNotify: true
    }),

    new FriendlyErrors(),
    new CleanWebpackPlugin()
  ]
};

const devServerConfig = {
  quiet: true,
  writeToDisk: true,
  port,
  hot: true,
  host: '0.0.0.0',
  open: true
};
const compiler = webpack(webpackConfig, () => console.log());

if (isDev) {
  const server = new webpackDevServer(compiler, devServerConfig);
  server.listen(port, 'localhost');
}
