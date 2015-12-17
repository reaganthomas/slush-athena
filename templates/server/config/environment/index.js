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
  let envConfig = deepmerge(requiredConfiguration, require('./' + process.env.NODE_ENV) || {});

  if(process.env.NODE_ENV !== 'production') {
    envConfig = deepmerge(envConfig, require('./doNotCommit.env'));
  }

  module.exports = envConfig;

})();
