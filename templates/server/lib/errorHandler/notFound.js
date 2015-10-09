(function IIFE() {
  'use strict';

  const _ = require('ramda');

  const enums = require('../enums');

  function notFound(req, res, message) {
    return res.status(404).json({
      errors: [
        _.merge({
          description: message || 'Requested resource could not be found',
          message: message || 'Requested resource could not be found'
        }, enums.errors.notFound)
      ]
    });
  }

  module.exports = notFound;
})();
