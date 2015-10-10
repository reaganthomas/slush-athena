(function IIFE() {
  'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var <%= modelName %>Schema = new Schema({
    // Insert model specifications here
  });

  module.exports = mongoose.model('<%= modelName %>', <%= modelName %>Schema);
})();
