(function() {
  'use strict';

  const mongoose = require('mongoose');

  const <%= modelCapitalCase %> = require('../../<%= modelCamelCase %>.model');

  function create<%= modelCapitalCase %>(req, res, next) {
    <%= modelCapitalCase %>.create(req.body)
      .then(<%= modelCamelCase %> => {
        return res.status(201).json(<%= modelCamelCase %>);
      }).then(null, next);
  }

  module.exports = create<%= modelCapitalCase %>;
})();
