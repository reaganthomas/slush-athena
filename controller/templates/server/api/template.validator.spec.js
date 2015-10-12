(function IIFE() {
  'use strict';

  var _ = require('ramda');
  var expect = require('chai').expect;
  var request = require('supertest');
  var httpMocks = require('node-mocks-http');

  var validator = require('./<%= controllerLower %>');

  var req;
  var res;
  var body;

  describe('<%= controllerName %> validator', function() {
    beforeEach(function(done) {
      body = _.merge({}, {});
      res = httpMocks.createResponse();
      done();
    });

    describe('exampleMethod', function() {
      it('should accept all input', function(done) {
        req = httpMocks.createRequest({
          body: {}
        });

        validator(req, res, function(err) {
          expect(err).to.not.exist;
          expect(res._isEndCalled()).to.be.false;
          done();
        });
      });
    });
  });
})();
