// const path = require('path')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')

// module.exports = {
//     devServer: {
//         port: 9998
//     },
//     productionSourceMap: false,
//     configureWebpack: {
//         plugins: [
//             new PrerenderSPAPlugin({
//                 // Required - The path to the webpack-outputted app to prerender.
//                 staticDir: path.join(__dirname, 'dist'),
//                 // Required - Routes to render.
//                 // routes: [ '/', '/product', '/contact' ],
//                 routes: ['/', '/index/product', '/index/brand', '/index/event', '/product/bags-gift', '/product/bags-group', '/product/bags-max', '/product/bags-taste', '/product/gift-light', '/product/gift-souvenir', '/product/style-top', '/product/style-year'],
//             })
//         ]
//     },
//     pluginOptions: {
//         'style-resources-loader': {
//             preProcessor: 'scss',
//             patterns: [
//                 path.resolve(__dirname, 'src/style/*.scss')
//             ]
//         }
//     }
// }