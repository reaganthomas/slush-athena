(function IIFE() {
  'use strict';

  const _ = require('ramda');
  const expect = require('chai').expect;
  const request = require('supertest');
  const httpMocks = require('node-mocks-http');

  const validator = require('./<%= controllerLower %>');

  let req;
  let res;
  let body;

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
