const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    let use = app.use(createProxyMiddleware('/apis', {
        logLevel: 'debug',
        //Change this to your backend, e.g. http://123.432.653.21:8080
        target: "http://165.227.0.112:8080",
        changeOrigin: true,
        secure: true,
    }));
};
