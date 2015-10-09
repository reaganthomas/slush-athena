(function IIFE() {
  'use strict';

  require('babel/register');

  var runSequence = require('run-sequence');
  var gulp = require('gulp');

  var config = require('./build-config');

  var plugins = require('gulp-load-plugins')(config.gulpLoadPlugins);
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
    runSequence(['clean'], ['lint'], ['move'], cb);
  });
})();
