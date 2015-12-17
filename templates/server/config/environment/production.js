(function IIFE() {
  'use strict';

  module.exports = {
    port: process.env.PORT<% if(mongoose) { %>,
    mongo: {
      uri: process.env.MONGO_URI,
      autoIndex: false
    }<% } %>
  };
})();
