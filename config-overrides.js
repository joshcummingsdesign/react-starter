const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@state': path.resolve(__dirname, 'src/state'),
      '@components': path.resolve(__dirname, 'src/views/components'),
      '@pages': path.resolve(__dirname, 'src/views/pages'),
      '@styles': path.resolve(__dirname, 'src/views/styles')
    }
  };

  return config;
};
