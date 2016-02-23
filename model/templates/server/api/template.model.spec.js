(function IIFE() {
  'use strict';

  const expect = require('chai').expect;

  const <%= modelName %> = require('./<%= modelLower %>.model');

  describe('<%= modelName %> Model', function() {
    afterEach(function(done) {
      <%= modelName %>.remove({}, done);
    });

    // Insert model tests here
  });
})();
