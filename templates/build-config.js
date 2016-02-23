(function IIFE() {
  'use strict';

  const gulpLoadPlugins = {
    scope: ['devDependencies'],
    rename: {}
  };

  const istanbul = {
    thresholds: {
      global: 0,
      each: 0
    }
  };

  module.exports = {
    gulpLoadPlugins: gulpLoadPlugins,
    istanbul: istanbul
  };
})();
