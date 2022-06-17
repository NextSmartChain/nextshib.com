module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
    outputDir: "dist",
    css: {
        loaderOptions: {
            scss: {
                additionalData: '@import "@/style/main.scss";'
            }
        }
    },
    transpileDependencies: [
        'vuetify', "web3modal-vue"
    ]
}
