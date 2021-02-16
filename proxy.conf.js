const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://run.mocky.io/v3/5d542ec72f000048248614b3',
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: { '^/api': '' },
  },
];

module.exports = PROXY_CONFIG;
