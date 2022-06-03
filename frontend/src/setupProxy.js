const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/apis', {
        logLevel: 'debug',
        //ip address or domain goes here
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: true,
    }));
};