(function IIFE() {
  'use strict';

  const _ = require('ramda');

  const enums = require('../enums');

  function serverError(req, res, err) {
    return res.status(500).json({
      errors: [ _.merge({
        description: err || 'There was a problem processing your request',
        message: 'There was a problem processing your request'
      }, enums.errors.serverError) ]
    });
  }

  module.exports = serverError;
})();
