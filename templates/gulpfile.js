(function IIFE() {
  'use strict';

  const runSequence = require('run-sequence');
  const gulp = require('gulp');

  const config = require('./build-config');

  let plugins = require('gulp-load-plugins')(config.gulpLoadPlugins);
      plugins.exec = require('child_process').exec;
      plugins.del = require('del');

  require('gulp-simple-task-loader')({
    plugins: plugins,
    config: config,
    filenameDelimiter: '-',
    tasknameDelimiter: ':',
    taskDirectory: 'tasks'
  }, gulp);

  gulp.task('help', require('gulp-task-listing'));

  gulp.task('default', function(cb) {
    runSequence(['lint'], cb);
  });
})();
