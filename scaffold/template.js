(function IIFE() {
  'use strict';

  var _ = require('ramda');
  var slugify = require('underscore.string').slugify;
  var rename = require('gulp-rename');
  var template = require('gulp-template');
  var conflict = require('gulp-conflict');
  var install = require('gulp-install');
  var gulp = require('gulp');

  const mongooseSpecificDir = '!' + __dirname + '/../templates/server/config/seed/**/*';

  var moveTemplates = _.curry(function(done, answers) {
    if (!answers.moveon) {
      return done();
    }

    answers.appNameSlug = slugify(answers.appName);

    let gulpSrc = [__dirname + '/../templates/**/*'];

    if(!answers.mongoose) {
      gulpSrc.push(mongooseSpecificDir);
    }

    gulp.src(gulpSrc, { dot: true })
      .pipe(template(answers))
      .pipe(rename(renameScheme))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .pipe(install())
      .on('end', function() {
        done();
      });

    function renameScheme(file) {
      if (file.basename[0] === '_') {
        file.basename = '.' + file.basename.slice(1);
      }
    }
  });

  module.exports = moveTemplates;
})();
