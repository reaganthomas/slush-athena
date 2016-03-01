(function() {
  'use strict';

  const request = require('supertest');
  const expect = require('chai').expect;
  const mongoose = require('mongoose');

  const <%= modelCapitalCase %> = require('../../<%= modelCamelCase %>.model');

  const app = require('../../../../app');

  const minimumModel = <%= modelCapitalCase %>.generateMinimumModel();
  const <%= modelCamelCase %>Id = minimumModel._id;

  const update = {
    name: 'updatedName'
  };

  describe('PUT /api/<%= modelPlural %>/:<%= modelCamelCase %>Id', function() {
    beforeEach(() => {
      return <%= modelCapitalCase %>.create(minimumModel);
    });

    afterEach(() => <%= modelCapitalCase %>.remove({}));

    it('should return 201', function(done) {
      request(app)
        .put('/api/<%= modelPlural %>/' + <%= modelCamelCase %>Id)
        .send(update)
        .expect(201, done);
    });

    it.skip('should update <%= modelCamelCase %> by id', function(done) {
      request(app)
        .put('/api/<%= modelPlural %>/' + <%= modelCamelCase %>Id)
        .send(update)
        .end(() => {
          <%= modelCapitalCase %>.findOne({
            _id: <%= modelCamelCase %>Id
          }).then(<%= modelCamelCase %> => {
            expect(<%= modelCamelCase %>.name).to.equal(update.name);
            done();
          }, done);
        });
    });

    it('should return a 404 if no <%= modelCamelCase %> found by <%= modelCamelCase %>Id', function(done) {
      request(app)
        .put('/api/<%= modelPlural %>/' + mongoose.Types.ObjectId())
        .send(update)
        .expect(404, done);
    });

    it('should return a 400 if <%= modelCamelCase %>Id is not a mongo id', function(done) {
      request(app)
        .put(`/api/<%= modelPlural %>/asdf`)
        .expect(400, done);
    });
  });
})();
