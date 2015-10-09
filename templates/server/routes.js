/* istanbul ignore next */
(function IIFE() {
  'use strict';

  const path = require('path');

  const errorHandler = require('./lib/errorHandler');

  module.exports = function(app) {
    app.use('/api', require('./api'));

    app.route('/*').all(function(req, res) {
      errorHandler.notFound(req, res);
    });
  };
})();
