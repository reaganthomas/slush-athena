(function IIFE() {
  'use strict';

  const router = require('express').Router();

  const controller = require('./<%= controllerLower %>.controller');

  router.get('/example', controller.exampleMethod);

  module.exports = router;
})();
