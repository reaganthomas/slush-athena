(function IIFE() {
  'use strict';

  module.exports = {
    port: process.env.PORT || fatal('PORT not defined')<% if(mongoose) { %>,
    mongo: {
      uri: process.env.MONGO_URI || fatal('MONGO_URI not defined'),
      autoIndex: false
    }<% } %>
  };

  function fatal(message) {
    throw new Error(message);
  }
})();
