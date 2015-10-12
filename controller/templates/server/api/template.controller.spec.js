(function IIFE() {
  'use strict';

  var request = require('supertest');
  var chai = require('chai');

  var app = require('../../app');
  var expect = chai.expect;
  var contentType = 'Content-Type';
  var json = /json/;

  describe('<%= controllerName %> controller', function() {
    it('should heartbeat the example route', function(done) {
      request(app)
        .get('/api/<%= controllerRoute %>/example')
        .expect(contentType, json)
        .expect(404, done);
    });
  });
})();
