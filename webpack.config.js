module.exports = {
    entry: './src/renderer.js',
    output: {
        filename: './renderer-bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {test: /\.json$/, loader: "json-loader"}
        ]
    }
}
