(function IIFE() {
  'use strict';

  var slugify = require('underscore.string').slugify;
  var conflict = require('gulp-conflict');
  var template = require('gulp-template');
  var install = require('gulp-install');
  var gulp = require('gulp');
  var _ = require('ramda');

  var mongooseSpecificDir = '!' + __dirname + '/../templates/server/config/seed/**/*';

  var moveTemplates = _.curry(function(done, answers) {
    if (!answers.moveon) {
      return done();
    }

    answers.appNameSlug = slugify(answers.appName);

    var gulpSrc = [__dirname + '/../templates/**/*'];

    if(!answers.mongoose) {
      gulpSrc.push(mongooseSpecificDir);
    }

    gulp.src(gulpSrc, { dot: true })
      .pipe(template(answers))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .pipe(install())
      .on('end', function() {
        done();
      });
  });

  module.exports = moveTemplates;
})();
