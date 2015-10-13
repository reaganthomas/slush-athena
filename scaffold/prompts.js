(function IIFE() {
  'use strict';

  function makePrompts(defaults) {
    var prompts = Object.freeze([{
      name: 'appName',
      message: 'What is the name of your project?',
      default: defaults.appName
    }, {
      name: 'appDescription',
      message: 'What is the description?'
    }, {
      type: 'confirm',
      name: 'mongoose',
      message: 'Will you be using mongoose?'
    }, {
      type: 'confirm',
      name: 'moveon',
      message: 'Continue?'
    }]);

    return prompts;
  }

  module.exports = makePrompts;
})();
