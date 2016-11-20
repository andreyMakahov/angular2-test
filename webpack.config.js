var buildDir = require('./config/buildConfig').buildDir;

module.exports = {

    entry: {
        app: './app/index.ts'
    },

    output: {
        filename: buildDir + '/app.js'
    },

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            }
        ]
    }

};