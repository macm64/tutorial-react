var path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, '/src/index.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        loader: 'babel-loader',
        exclude: '/node-modules/',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /(\.css)$/,
        loader: 'style-loader'
      }, {
        test: /(\.css)$/,
        loader: 'css-loader'
      }
    ]
  }
}
