module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    configureWebpack: {
        devtool: 'source-map'
    },
    publicPath: '/',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        // historyApiFallback: {
        //     index: '/index.html'
        // }
        historyApiFallback: true
    }
};