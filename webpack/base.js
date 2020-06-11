const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [{
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'ts-loader'
        }]
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml|glsl)$/i,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '../')
    }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
