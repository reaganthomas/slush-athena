(function IIFE() {
  'use strict';

  function makePrompts(defaults) {
    var prompts = Object.freeze([{
      name: 'modelCapitalCase',
      message: 'What is the name of your model?',
      validate: function(input) {
        var done = this.async();

        if(/^([A-Z][a-z]+){1,3}$/.test(input)) {
          done(true);
        } else {
          done('Model name must be capital case, with a maximum of 3 words.');
        }
      }
    }, {
      name: 'modelPlural',
      message: 'What is the pluralization of this model?',
      validate: function(input) {
        var done = this.async();

        if(/^([A-Z][a-z]+){1,3}$/.test(input)) {
          done(true);
        } else {
          done('Model pluralization must be capital case, with a maximum of 3 words.');
        }
      }
    },{
      type: 'confirm',
      name: 'moveon',
      message: 'Continue?'
    }]);

    return prompts;
  }

  module.exports = makePrompts;
})();
