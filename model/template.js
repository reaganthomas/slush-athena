(function IIFE() {
  'use strict';

  var slugify = require('underscore.string').slugify;
  var conflict = require('gulp-conflict');
  var template = require('gulp-template');
  var install = require('gulp-install');
  var rename = require('gulp-rename');
  var jsonfile = require('jsonfile');
  var gulp = require('gulp');
  var _ = require('ramda');

  var moveTemplates = _.curry(function(done, answers) {
    if(!answers.moveon) {
      return done();
    }

    let athenarc = jsonfile.readFileSync('./.athenarc');

    if(athenarc && !athenarc.mongoose) {
      return done('Project scaffolded without mongoose; cannot scaffold model.');
    }

    answers.modelLower = answers.modelName.match(/[A-Z][a-z]+/g).join('-').toLowerCase();

    let gulpSrc = [__dirname + '/templates/**/*'];

    gulp.src(gulpSrc, { dot: true })
      .pipe(template(answers))
      .pipe(rename(addModelDirToPath))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .on('end', function() {
        done();
      });

    function addModelDirToPath(path) {
      if(path.basename.indexOf('model') !== -1) {
        path.dirname += '/' + answers.modelLower;
        path.basename = path.basename.replace('template', answers.modelLower);
      }
    }
  });

  module.exports = moveTemplates;
})();
