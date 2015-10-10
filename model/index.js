(function IIFE() {
  'use strict';

  var defaults = require('./defaults');

  module.exports = {
    defaults: defaults,
    prompts: require('./prompts')(defaults),
    template: require('./template')
  };
})();
