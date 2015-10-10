(function IIFE() {
  'use strict';

  var _ = require('ramda');
  var slugify = require('underscore.string').slugify;
  var rename = require('gulp-rename');
  var template = require('gulp-template');
  var conflict = require('gulp-conflict');
  var install = require('gulp-install');
  var gulp = require('gulp');
  var jsonfile = require('jsonfile');
  var fs = require('fs');

  var moveTemplates = _.curry(function(done, answers) {
    if(!answers.moveon) {
      return done();
    }

    let athenarc = jsonfile.readFileSync('./athenarc');

    if(athenarc && !athenarc.mongoose) {
      return done('Project scaffolded without mongoose; cannot scaffold model.');
    }

    let gulpSrc = [__dirname + '/templates/**/*'];

    gulp.src(gulpSrc, { dot: true })
      .pipe(template(answers))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .on('end', function() {
        done();
      });
  });

  module.exports = moveTemplates;
})();
