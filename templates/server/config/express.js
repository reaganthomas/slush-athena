(function IIFE() {
  'use strict';

  var methodOverride = require('method-override');
  var compression = require('compression');
  var bodyParser = require('body-parser');
  var express = require('express');
  var path = require('path');

  var config = require('./environment');

  module.exports = function(app) {
    app.disable('x-powered-by');

    let env = app.get('env');

    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use('/docs', express.static('docs'));
    app.set('appPath', path.join(config.root, 'docs'));

    /* istanbul ignore next */
    if(env === 'development' || env === 'test') {
      app.use(require('connect-livereload')());
      app.use(require('errorhandler')());
    }
  };
})();
