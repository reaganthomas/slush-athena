(function IIFE() {
  'use strict';

  const router = require('express').Router();

  const controller = require('./<%= controllerLower %>.controller');
  const validator = require('./<%= controllerLower %>.validator');

  router.get('/example', validator.exampleMethod, controller.exampleMethod);

  module.exports = router;
})();
