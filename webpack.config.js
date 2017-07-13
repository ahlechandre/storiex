const path = require('path');
const webpack = require('webpack');

const debug = (process.env.NODE_ENV !== 'production');
const webpackDevtool = debug ? 'inline-sourcemap' : null;
const webpackModuleLoaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: [
        'react',
        'es2015',
        'stage-0',
      ],
      plugins: [
        'react-html-attrs',
        'transform-class-properties',
        'transform-decorators-legacy',
      ],
    },
  },
];
const webpackDevPlugins = [];
const webpackProdPlugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    mangle: false,
    sourcemap: false,
  }),
];

module.exports = {
  context: __dirname,
  devtool: webpackDevtool,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/dist/',
    filename: debug ? 'app.js' : 'app.min.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    loaders: webpackModuleLoaders,
  },
  plugins: debug ? webpackDevPlugins : webpackProdPlugins,
};
