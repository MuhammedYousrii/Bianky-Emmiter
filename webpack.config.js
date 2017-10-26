const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Dircleaner = require('clean-webpack-plugin');
var webpack = require('webpack');
const {
  isProd,
  defineEnvPlugin
} = require('./config/webpack.env.js');
const {
  provideLibsExtending ,
  libsExtracting ,
  bundleAnalyzer
} = require('./config/webpack.plugins.js');
const {
  devServer
} = require('./config/webpack.devserver.js');
const {
  resolve
} = require('./config/webpack.resolver.js');



/**
 * 
 * @param {Boolean} prod
 * @return {Object} config 
 */
const hmrConfig = function (prod) {
  var config;
  // if Development Mode
  if (!prod) {
    //fire HMR Feature
    config = new webpack.HotModuleReplacementPlugin();
    return config;
  }

}



module.exports = {
  // Sources Context
  context: path.resolve(__dirname, 'src'),
  recordsPath: path.resolve(__dirname, 'dist/', 'records.json'),
  //if prod mode
  cache: isProd,
  profile: true,
  target: 'web',




  entry: {
    libs: ['jquery'],
    router: path.resolve(__dirname, 'src/router.js'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].js',
    filename: isProd ? '[name].min.js' : '[name].js',
    publicPath : '/'
  },




  module: {
    rules: [


      //Js Loader 
      {
        test: /.js?$/,
        include: [
          path.resolve(__dirname, 'src/modules/')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components')
        ],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', {
                modules: false
              }]
            ]
          }
        }]

      },

    ]
  },


  resolve,
  devServer,


  plugins: [
    //Disable Source Map On vendors
    new webpack.SourceMapDevToolPlugin({
      test: /\.min\.js$/,
      filename: '[name].js.map',
      exclude: ['libs.bundle.js', 'commons.bundle.js']
    }),

    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: false,
      comments: false
    }),

    libsExtracting,
    provideLibsExtending,
    defineEnvPlugin,
    bundleAnalyzer ,
    new Dircleaner(['dist']),
    hmrConfig(),
    new webpack.NamedModulesPlugin(),
  ]


};