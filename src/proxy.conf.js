const PROXY_CONFIG = [
    {
        context: [ "/dev" ],
        target: "https://run.mocky.io",
        secure: false,
        changeOrigin: true,
        pathRewrite: { "/dev": "" }
    }

]

module.exports = PROXY_CONFIG;
