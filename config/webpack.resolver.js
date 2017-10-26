const path = require('path');
const resolve = {
    alias: {
        "scss": path.resolve(__dirname, '../src/stylesheets/'),
        "js": path.resolve(__dirname, '../src/modules/'),
        "pugs" : path.resolve(__dirname , '../src/pugs/') 
    },
    extensions: ['.js', '.css', '.scss', '.pug', '.png' ],
    modules: [
        path.resolve(__dirname, '../node_modules'),
        path.resolve(__dirname, '../bower_component'),
    ]
};

module.exports = {
    resolve ,
}