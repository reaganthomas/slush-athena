(function IIFE() {
  'use strict';

  const _ = require('ramda');

  const enums = require('../enums');

  function invalidPayload(req, res, invalidFields) {
    let errors = [];

    if (!Array.isArray(invalidFields)) {
      invalidFields = [ invalidFields ];
    }

    invalidFields.forEach(function(field) {
      errors.push(_.merge({
        description: field + ' is invalid or missing',
        message: field + ' is invalid or missing'
      }, enums.errors.invalidInput));
    });

    return res.status(400).json({
      errors: errors
    });
  }

  module.exports = invalidPayload;
})();
