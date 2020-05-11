// vue.config.js
module.exports = {
   
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    // 改为'./'
    // 将baseUrl改为publicPath以解决build中出现的warning
    // 输出文件目录
    outputDir: 'dist',
    publicPath: './',
    //Django要求的静态资源文件夹
    assetsDir: 'static',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8084/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  //'^/api': ''
                }
            },
            
        }
    }
}
// .env.development
//VUE_APP_BASE_API= /api
