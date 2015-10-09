(function IIFE() {
  'use strict';

  module.exports = {
    port: 8080<% if(mongoose) { %>,
    mongo: {
      uri: 'mongodb://localhost/<%= appNameSlug %>-production',
      autoIndex: false
    }<% } %>
  };
})();
