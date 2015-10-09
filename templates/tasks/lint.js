(function IIFE() {
  'use strict';

  module.exports = function(gulp, config, plugins) {
    return function() {
      return gulp.src('./server/**/*.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter(plugins.jshintStylish));
    };
  };
})();
