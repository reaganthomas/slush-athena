(function IIFE() {
  'use strict';

  function makePrompts(defaults) {
    const prompts = Object.freeze([{
      name: 'modelName',
      message: 'What is the name of your model?',
      validate: function(input) {
        var done = this.async();

        if(/^([A-Z][a-z]+){1,3}$/.test(input)) {
          done();
        } else {
          done('Model name must be capital case, with a maximum of 3 words.');
        }
      }
    }, {
      type: 'confirm',
      name: 'moveon',
      message: 'Continue?'
    }]);

    return prompts;
  }

  module.exports = makePrompts;
})();