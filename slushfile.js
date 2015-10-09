(function IIFE() {
  'use strict';

  require('babel/register');

  var gulp = require('gulp');
  var inquirer = require('inquirer');

  var scaffold = require('./scaffold');

  gulp.task('default', function(done) {
    inquirer.prompt(scaffold.prompts, scaffold.template(done));
  });
})();
