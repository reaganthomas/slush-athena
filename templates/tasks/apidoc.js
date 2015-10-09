(function IIFE() {
  'use strict';

  module.exports = function(gulp, config, plugins) {
    return function() {
      plugins.apidoc.exec({
        src: 'server/',
        dest: 'docs/'
      });
    };
  };
})();
