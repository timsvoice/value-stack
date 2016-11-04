const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/handler.js',
    target: 'node',
    // externals: [nodeExternals({
    //   whitelist: ['graphql-tools', 'graphql']
    // })],
    output: {
        path: '.',
        filename: 'handler.js',
        libraryTarget: 'commonjs'
    },
    module: {
      loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      }]
    }
};
