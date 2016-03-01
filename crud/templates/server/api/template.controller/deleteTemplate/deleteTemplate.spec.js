(function() {
  'use strict';

  const request = require('supertest');
  const expect = require('chai').expect;
  const mongoose = require('mongoose');

  const <%= modelCapitalCase %> = require('../../<%= modelCamelCase %>.model');

  const app = require('../../../../app');

  const minimumModel = <%= modelCapitalCase %>.generateMinimumModel();
  const <%= modelCamelCase %>Id = minimumModel._id;

  describe('DELETE /api/<%= modelPlural %>/:<%= modelCamelCase %>Id', function() {
    beforeEach(() => {
      return <%= modelCapitalCase %>.create(minimumModel);
    });

    afterEach(() => <%= modelCapitalCase %>.remove({}));

    it('should return 204', function(done) {
      request(app)
        .delete('/api/<%= modelPlural %>/' + <%= modelCamelCase %>Id)
        .expect(204, done);
    });

    it('should delete <%= modelCamelCase %> by id', function(done) {
      request(app)
        .delete('/api/<%= modelPlural %>/' + <%= modelCamelCase %>Id)
        .end(() => {
          <%= modelCapitalCase %>.findOne({
            _id: <%= modelCamelCase %>Id
          }).then(<%= modelCamelCase %> => {
            expect(<%= modelCamelCase %>).to.not.exist;
            done();
          }, done);
        });
    });

    it('should return a 404 if no <%= modelCamelCase %> found by <%= modelCamelCase %>Id', function (done) {
      request(app)
        .delete('/api/<%= modelPlural %>/' + mongoose.Types.ObjectId())
        .expect(404, done);
    });

    it('should return a 400 if <%= modelCamelCase %>Id is not a mongo id', function (done) {
      request(app)
        .delete(`/api/<%= modelPlural %>/asdf`)
        .expect(400, done);
    });
  });
})();
