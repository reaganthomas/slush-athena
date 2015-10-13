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

    var controllerWords = answers.controllerName.match(/[A-Z][a-z]+/g);
    var controllerFirstLetter = answers.controllerName[0].toLowerCase();

    answers.controllerLower = controllerWords.join('-').toLowerCase();
    answers.controllerRoute = controllerFirstLetter + controllerWords.join('').slice(1);

    var gulpSrc = [__dirname + '/templates/**/*'];

    gulp.src(gulpSrc, { dot: true })
      .pipe(template(answers))
      .pipe(rename(addControllerDirToPath))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .on('end', function() {
        done();
      });

    function addControllerDirToPath(path) {
      if(path.basename === 'index' || path.basename.indexOf('controller') !== -1 || path.basename.indexOf('validator') !== -1) {
        path.dirname += '/' + answers.controllerLower;
        path.basename = path.basename.replace('_index', 'index');
        path.basename = path.basename.replace('template', answers.controllerLower);
      }
    }
  });

  module.exports = moveTemplates;
})();
