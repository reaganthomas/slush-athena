(function IIFE() {
  'use strict';

  function exampleMethod(req, res, next) {
    return res.status(404).json({});
  }

  module.exports = {
    exampleMethod: exampleMethod
  };
})();
