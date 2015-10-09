(function IIFE() {
  'use strict';

  var path = require('path');

  let workingDirName = path.basename(process.cwd());
  let defaults = { appName: workingDirName };

  module.exports = defaults;
})();
