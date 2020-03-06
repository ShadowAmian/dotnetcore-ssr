const path = require('path')

const serverConfig = {
    target: 'node',
    entry: {
        'bundle': './src/server.js'
    },
    output: {
        filename: '[name]-server.js',
        libraryTarget: 'commonjs2',
    },
}
const clientConfig = {
    entry: {
        'bundle': './src/client.js'
    },
    output: {
        filename: '[name]-client.js'
    },
}

module.exports = {
    outputDir: path.join(__dirname, '../wwwroot/dist'),
    configureWebpack:clientConfig
}



