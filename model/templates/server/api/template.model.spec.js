(function IIFE() {
  'use strict';

  var expect = require('chai').expect;

  var <%= modelName %> = require('./<%= modelLower %>.model');

  describe('<%= modelName %> Model', function() {
    afterEach(function(done) {
      <%= modelName %>.remove({}, done);
    });

    // Insert model tests here
  });
})();
