(function IIFE() {
  'use strict';

  const router = require('express').Router();

  const controller = require('./<%= modelCamelCase %>.controller');

  router.post('/', controller.create<%= modelCapitalCase %>);

  router.route('/:<%= modelCamelCase %>Id')
    .get(controller.get<%= modelCapitalCase %>)
    .put(controller.update<%= modelCapitalCase %>)
    .delete(controller.delete<%= modelCapitalCase %>);

  module.exports = router;
})();
