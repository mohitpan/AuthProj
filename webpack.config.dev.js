import path from 'path';

var config = {
    entry: path.join(__dirname,'/client/index.js'),

    output: {
        path: '/'
    },

    module: {
        loaders: [
        {
            test: /\.js?$/,
            exclude:/node_modules/,
            loader: 'babel',

            query: {
                presets: ['es2015','react']
            }
        }
        ]
    }
}


export default config;