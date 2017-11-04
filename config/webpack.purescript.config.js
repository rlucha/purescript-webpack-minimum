module.exports = {
    entry: './src/pure/main.purs',
    output: {
        filename: './src/pure.js',
        library: 'pure',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
          { test: /\.(purs)$/,
            loader: 'purs-loader',
            query: {
              psc: 'psa',
              src: ['bower_components/purescript-*/src/**/*.purs', 'src/**/*.purs']
            }
          },
        ],
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json']
    }
};
