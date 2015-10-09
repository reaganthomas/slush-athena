(function IIFE() {
  'use strict';

  const httpMocks = require('node-mocks-http');
  const expect = require('chai').expect;

  const errorHandler = require('./index');

  let req;
  let res;

  describe('errorHandlers', function() {
    beforeEach(function() {
      req = httpMocks.createRequest();
      res = httpMocks.createResponse();
    });

    describe('serverError', function() {
      it('should return 500', function() {
        errorHandler.serverError(req, res);
        expect(res.statusCode).to.equal(500);
      });

      it('should return error array with default error message', function() {
        errorHandler.serverError(req, res);

        const data = JSON.parse(res._getData());
        expect(data.errors[0].description).to.be.ok;
      });

      it('should return error array with error argument', function() {
        const error = 'Something really bad happened!';
        errorHandler.serverError(req, res, error);

        const data = JSON.parse(res._getData());
        expect(data.errors[0].description).to.equal(error);
      });

    });

    describe('invalidPayload', function() {
      const invalidFields = ['name', 'email'];

      it('should return 400', function() {
        errorHandler.invalidPayload(req, res);
        expect(res.statusCode).to.equal(400);
      });

      it('should return an error for each invalid field', function() {
        errorHandler.invalidPayload(req, res, invalidFields);

        const data = JSON.parse(res._getData());
        expect(data.errors).to.have.length(invalidFields.length);
      });

      it('should return an error with field name in description and message', function() {
        errorHandler.invalidPayload(req, res, invalidFields);

        const data = JSON.parse(res._getData());
        invalidFields.forEach(function(field, index) {
          expect(data.errors[index].description).to.contain(field);
          expect(data.errors[index].message).to.contain(field);
        });
      });

      it('should return an error for a non array field', function() {
        errorHandler.invalidPayload(req, res, invalidFields[0]);

        const data = JSON.parse(res._getData());
        expect(data.errors).to.have.length(1);
      });

    });

    describe('notFound', function() {
      it('should return a 404', function() {
        errorHandler.notFound(req, res);
        expect(res.statusCode).to.equal(404);
      });

      it('should return error array of length 1', function () {
        errorHandler.notFound(req, res);

        const data = JSON.parse(res._getData());
        expect(data.errors).to.have.length(1);
      });

      it('should return an error with generic message and description', function () {
        errorHandler.notFound(req, res);

        const data = JSON.parse(res._getData());
        expect(data.errors[0].description).to.be.ok;
        expect(data.errors[0].message).to.be.ok;
      });

      it('should return error with argument as message and description', function () {
        const error = 'These are not the droids are you are looking for';

        errorHandler.notFound(req, res, error);

        const data = JSON.parse(res._getData());
        expect(data.errors[0].description).to.equal(error);
        expect(data.errors[0].message).to.equal(error);
      });
    });
  });

})();
