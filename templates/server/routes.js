/* istanbul ignore next */
(function IIFE() {
  'use strict';

  module.exports = function(app) {
    app.use('/api', require('./api'));

    app.route('/*').all(function(req, res) {
      res.sendStatus(404);
    });
  };
})();
