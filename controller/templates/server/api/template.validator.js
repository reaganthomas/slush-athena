(function IIFE() {
  'use strict';

  function exampleMethod(req, res, next) {
    const data = req.body;

    return next();
  }

  module.exports = {
    exampleMethod: exampleMethod
  };
})();
