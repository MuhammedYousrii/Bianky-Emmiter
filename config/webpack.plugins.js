const {ProvidePlugin , optimize} = require('webpack');
const {CommonsChunkPlugin} = optimize ; 
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
/**
* Extract Vendors Into Seaprate File To Cash it 
*/
const libsExtracting = new CommonsChunkPlugin({
 names: ['libs', 'commons'],
 minChunks: function(module, count) { 
    return module.resource && /nicescroll|jquery|wow.jss/.test(module.resource) && count >= 3
  },
});

/**
 * Provide Universal Keywords For vendors
 */
const provideLibsExtending = new ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
})


const bundleAnalyzer = new BundleAnalyzerPlugin({
    analyzerMode: 'server',
    analyzerHost: '127.0.0.1',
    analyzerPort: 9000,
    openAnalyzer: false
}); 

module.exports = {
    provideLibsExtending ,
    libsExtracting ,
    bundleAnalyzer 
}