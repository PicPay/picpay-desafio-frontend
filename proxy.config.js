const BASE_TARGET = 'https://run.mocky.io';
const APIS = ['/v2', '/v3'];

const proxy = [
  {
    context: APIS,
    target: BASE_TARGET,
    changeOrigin: true,
  },
];

module.exports = proxy;
