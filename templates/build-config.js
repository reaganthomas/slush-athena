(function IIFE() {
  'use strict';

  var gulpLoadPlugins = {
    scope: ['devDependencies'],
    rename: {}
  };

  var istanbul = {
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
