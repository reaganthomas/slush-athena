(function IIFE() {
  'use strict';

  var errorHandler = require('../../lib/errorHandler');

  function exampleMethod(req, res, next) {
    return errorHandler.notFound(req, res);
  }

  module.exports = {
    exampleMethod: exampleMethod
  };
})();
