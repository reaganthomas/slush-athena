(function IIFE() {
  'use strict';

  module.exports = {
    port: process.env.PORT || throw new Error('PORT not defined')<% if(mongoose) { %>,
    mongo: {
      uri: process.env.MONGO_URI || throw new Error('MONGO_URI not defined'),
      autoIndex: false
    }<% } %>
  };
})();
