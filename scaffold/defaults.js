(function IIFE() {
  'use strict';

  var path = require('path');

  var workingDirName = path.basename(process.cwd());
  var defaults = { appName: workingDirName };

  module.exports = defaults;
})();
