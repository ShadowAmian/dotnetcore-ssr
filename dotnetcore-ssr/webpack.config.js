const path = require('path')

const { VueLoaderPlugin } = require('vue-loader');

const merge = require('webpack-merge')

module.exports = (env) => {
    const shareConfig = function () {
        return {
            mode: 'development',
            output: {
                path: path.join(__dirname, './wwwroot/dist'),
                publicPath: '/dist/'
            },
            module: {
                rules: [
                    {
                        test: /\.vue$/,
                        loader: 'vue-loader'
                    },
                    {
                        test: /\.css$/,
                        use: [
                            'vue-style-loader',
                            'css-loader'
                        ]
                    }
                ]
            },
            plugins: [
                new VueLoaderPlugin()
            ],
        }
    }

    const serverConfig = merge(shareConfig(), {
        target: 'node',
        entry: {
            'bundle': './ClientApp/src/server.js'
        },
        output: {
            filename: '[name]-server.js',
            libraryTarget: 'commonjs2',
        },
    })
    const clientConfig = merge(shareConfig(), {
        entry: {
            'bundle': './ClientApp/src/client.js'
        },
        output: {
            filename: '[name]-client.js'
        },
    })
    return [serverConfig, clientConfig]
}