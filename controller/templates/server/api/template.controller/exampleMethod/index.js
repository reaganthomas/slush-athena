(function IIFE() {
  'use strict';

  function exampleMethod(req, res, next) {
    return res.sendStatus(404);
  }

  module.exports = exampleMethod;
})();
