const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app => {
    app.use('/user',
        createProxyMiddleware(
            {
                target: 'http://localhost:8080',
                changeOrigin: true,
            }
        )
    )

}