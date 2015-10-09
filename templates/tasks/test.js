(function IIFE() {
  'use strict';

  module.exports = function(gulp, config, plugins) {
    return function() {
      process.env.NODE_ENV = 'test';

      return gulp.src('./server/**/*.spec.js', { read: false })
        .pipe(plugins.mocha({ reporter: 'spec', timeout: 5000 }))
        .once('error', function(err) {
          console.log(err);
          process.exit(1);
        })
        .once('end', function() {
          process.exit();
        });
    };
  };
})();
