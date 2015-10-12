(function IIFE() {
  'use strict';

  var router = require('express').Router();

  var controller = require('./<%= controllerLower %>.controller');
  var validator = require('./<%= controllerLower %>.validator');

  router.get('/example', validator.exampleMethod, controller.exampleMethod);

  module.exports = router;
})();
