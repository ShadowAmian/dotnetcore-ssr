const prerenderer = require('aspnet-prerendering')

const path = require('path')
const filePath = path.join(__dirname, '../../wwwroot/dist/bundle-server.js')

const vueRenderer = require('vue-server-renderer')

const bundleRanderer = vueRenderer.createBundleRenderer(filePath);

module.exports = prerenderer.createServerRenderer(function (params) {
    const context = {
        url: params.url
    }
  
    return new Promise(function (resolve, reject) {
        bundleRanderer.renderToString(context, (err, html) => {
            if (err) {
                reject(err)
            }
            resolve({
                html
            })
        });

    })
})