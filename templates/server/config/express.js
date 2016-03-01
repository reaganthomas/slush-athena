(function IIFE() {
  'use strict';

  const methodOverride = require('method-override');
  const compression = require('compression');
  const bodyParser = require('body-parser');
  const express = require('express');
  const path = require('path');
  const morgan = require('morgan');

  const config = require('./environment');

  module.exports = function(app) {
    app.disable('x-powered-by');

    let env = app.get('env');

    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    if(env !== 'test') {
      app.use(morgan('dev'));
    }

    app.use('/docs', express.static('docs'));
    app.set('appPath', path.join(config.root, 'docs'));

    /* istanbul ignore next */
    if(env === 'development' || env === 'test') {
      app.use(require('connect-livereload')());
    }
  };
})();
