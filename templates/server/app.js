/* istanbul ignore next */
(function IIFE() {
  'use strict';

  const chalk = require('chalk');

  if(!process.env.NODE_ENV) {
    console.log(chalk.red('No environment specified...') + chalk.blue('defaulting to \'development\''));
    process.env.NODE_ENV = 'development';
  }

  const express = require('express');
  <% if(mongoose) { %>var mongoose = require('mongoose');<% } %>

  const config = require('./config/environment');

  <% if(mongoose) { %>mongoose.connect(config.mongo.uri, config.mongo.options);

  mongoose.connection.on('error', function(err) {
    console.error('Mongo Error: ' + err);
  });<% } %>

  const app = express();
  const server = require('http').createServer(app);

  require('./config/express')(app);
  require('./routes')(app);

  server.listen(config.port, config.ip, function() {
    console.log('<%= appNameSlug %> listening on %d in %s mode', config.port, app.get('env'));
  });

  exports = module.exports = app;
})();
