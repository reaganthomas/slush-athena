(function() {
  'use strict';

  const mongoose = require('mongoose');
  const errorHandler = require('error.handler');

  const <%= modelCapitalCase %> = require('../../<%= modelCamelCase %>.model');

  function update<%= modelCapitalCase %>(req, res, next) {
    if (!mongoose.Types.ObjectId.isValid(req.params.<%= modelCamelCase %>Id)) {
      return errorHandler.badRequest(req, res, 'Invalid id');
    }

    const options = {
      new: true
    };

    <%= modelCapitalCase %>.findByIdAndUpdate(req.params.<%= modelCamelCase %>Id, req.body, options)
      .then(<%= modelCamelCase %> => {
        if (!<%= modelCamelCase %>) {
          return errorHandler.notFound(req, res, 'No <%= modelCapitalCase %> found for id: ' + req.params.<%= modelCamelCase %>Id);
        }

        res.status(201).json(<%= modelCamelCase %>);
      })
      .then(null, next);
  }

  module.exports = update<%= modelCapitalCase %>;
})();
