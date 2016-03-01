(function() {
  'use strict';

  const request = require('supertest');
  const expect = require('chai').expect;
  const mongoose = require('mongoose');

  const <%= modelCapitalCase %> = require('../../<%= modelCamelCase %>.model');

  const app = require('../../../../app');

  const minimumModel = <%= modelCapitalCase %>.generateMinimumModel();

  describe('POST /api/<%= modelPlural %>/', function() {
    afterEach(() => <%= modelCapitalCase %>.remove({}));

    it('should return 201', function(done) {
      request(app)
        .post(`/api/<%= modelPlural %>/`)
        .send(minimumModel)
        .expect(201, done);
    });

    it('should return <%= modelCamelCase %> by id', function(done) {
      request(app)
        .post(`/api/<%= modelPlural %>/`)
        .send(minimumModel)
        .end(function(err, res) {
          expect(res.body).to.be.an.Object;
          done();
        });
    });

    // TODO: Return 400 on failed validation
    it('should return a 400 if mongoose validation fails');
  });
})();
