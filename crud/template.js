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

    var athenarc = jsonfile.readFileSync('./.athenarc');

    if(athenarc && !athenarc.mongoose) {
      return done('Project scaffolded without mongoose; cannot scaffold model.');
    }

    answers.modelCamelCase = answers.modelCapitalCase.charAt(0).toLowerCase() + answers.modelCapitalCase.slice(1);
    answers.modelPlural = answers.modelPlural.charAt(0).toLowerCase() + answers.modelPlural.slice(1);

    var gulpSrc = [__dirname + '/templates/**/*'];

    gulp.src(gulpSrc, { dot: true })
      .pipe(template(answers))
      .pipe(rename(addCrudDirToPath))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .on('end', function() {
        console.info('Make sure to add this model\'s route to the server/api/index.js file');
        done();
      });

    function addCrudDirToPath(path) {
      if(path.dirname.indexOf('/api') !== -1) {
        path.dirname = path.dirname.replace('/api', '/api/' + answers.modelCamelCase);
      }

      path.dirname = path.dirname.replace(new RegExp('Template', 'g'), answers.modelCapitalCase);
      path.dirname = path.dirname.replace(new RegExp('template', 'g'), answers.modelCamelCase);
      path.basename = path.basename.replace(new RegExp('Template', 'g'), answers.modelCapitalCase);
      path.basename = path.basename.replace(new RegExp('template', 'g'), answers.modelCamelCase);
    }
  });

  module.exports = moveTemplates;
})();
