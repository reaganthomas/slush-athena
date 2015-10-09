(function IIFE() {
  'use strict';

  module.exports = function(gulp, config, plugins) {
    return function(cb) {
      plugins.del('./dist/**/*').then(function() {
        cb();
      });
    };
  };
})();
