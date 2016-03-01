(function() {
  'use strict';

  const mongoose = require('mongoose');
  const errorHandler = require('error.handler');

  const <%= modelCapitalCase %> = require('../../<%= modelCamelCase %>.model');

  function delete<%= modelCapitalCase %>(req, res, next) {
    if (!mongoose.Types.ObjectId.isValid(req.params.<%= modelCamelCase %>Id)) {
      return errorHandler.badRequest(req, res, 'Invalid id');
    }

    <%= modelCapitalCase %>.findByIdAndRemove(req.params.<%= modelCamelCase %>Id)
      .then(<%= modelCamelCase %> => {
        if (!<%= modelCamelCase %>) {
          return errorHandler.notFound(req, res, 'No <%= modelCapitalCase %> found for id: ' + req.params.<%= modelCamelCase %>Id);
        }

        res.sendStatus(204);
      })
      .then(null, next);
  }

  module.exports = delete<%= modelCapitalCase %>;
})();
