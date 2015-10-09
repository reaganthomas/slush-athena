(function IIFE() {
  'use strict';

  module.exports = {
    serverError: require('./serverError'),
    invalidPayload: require('./invalidPayload'),
    notFound: require('./notFound')
  };

})();
