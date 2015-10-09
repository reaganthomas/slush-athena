(function IIFE() {
  'use strict';

  module.exports = function(gulp, config, plugins) {
    return function() {
      return gulp.src('./server/**/*.js')
        .pipe(plugins.sourcemaps.init())
          .pipe(plugins.babel())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('./dist'));
    };
  };
})();
