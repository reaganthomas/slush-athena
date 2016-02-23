(function IIFE() {
  'use strict';

  const path = require('path');
  const deepmerge = require('deepmerge');

  // These are required properties for the application to run.
  // Do not define environment-specific settings here.
  // Use the appropriate environment file for specific configuration.
  const requiredConfiguration = {
    env: process.env.NODE_ENV,
    root: path.normalize(__dirname + '/../..'),
    port: null,
    <% if(mongoose) { %>mongo: {
      uri: null,
      options: {
        db: {
          safe: true
        }
      }
    }<% } %>
  };

  /* istanbul ignore next */
  module.exports = deepmerge(requiredConfiguration, require('./' + process.env.NODE_ENV) || {});

})();
