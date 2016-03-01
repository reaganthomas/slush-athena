(function() {
  'use strict';

  const request = require('supertest');
  const expect = require('chai').expect;
  const mongoose = require('mongoose');

  const <%= modelCapitalCase %> = require('../../<%= modelCamelCase %>.model');

  const app = require('../../../../app');

  const minimumModel = <%= modelCapitalCase %>.generateMinimumModel();
  const <%= modelCamelCase %>Id = minimumModel._id;

  describe('GET /api/<%= modelPlural %>/:<%= modelCamelCase %>Id', function() {
    beforeEach(() => {
      return <%= modelCapitalCase %>.create(minimumModel);
    });

    afterEach(() => <%= modelCapitalCase %>.remove({}));

    it('should return 200', function(done) {
      request(app)
        .get('/api/<%= modelPlural %>/' + <%= modelCamelCase %>Id)
        .expect(200, done);
    });

    it('should return <%= modelCamelCase %> by id', function(done) {
      request(app)
        .get('/api/<%= modelPlural %>/' + <%= modelCamelCase %>Id)
        .end(function(err, res) {
          expect(res.body._id).to.equal(<%= modelCamelCase %>Id.toString());
          done();
        });
    });

    it('should return 404 if no <%= modelCamelCase %> found', function(done) {
      request(app)
        .get('/api/<%= modelPlural %>/' + mongoose.Types.ObjectId())
        .expect(404, done);
    });

    it('should return a 400 if <%= modelCamelCase %>Id is not a mongo id', function(done) {
      request(app)
        .get(`/api/<%= modelPlural %>/asdf`)
        .expect(400, done);
    });
  });
})();
