const path = require('path')
const Webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const IS_DEV = process.env.NODE_ENV === 'development'

module.exports = {
  entry: './src/index.jsx',
  mode: IS_DEV ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].min.js',
    publicPath: IS_DEV ? '/' : '/dashboard'
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: IS_DEV,
    open: IS_DEV,
    port: 3000,
    static: '/dist',
    client: {
      overlay: false
    },
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new Webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer]
      }
    }),
    new HtmlWebpackPlugin({
      template: IS_DEV ? 'templates/dev.html' : './templates/prod.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './assets', to: 'assets' }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.pdf$/,
        use: [{
          loader: 'file-loader?name=[name].[ext]',
          options: {
            outputPath: 'assets/'
          }
        }]
      }
    ]
  }
}
