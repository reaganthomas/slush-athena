(function IIFE() {
  'use strict';

  module.exports = {
    port: 9000<% if(mongoose) { %>,
    mongo: {
      uri: 'mongodb://localhost/<%= appNameSlug %>'
    }<% } %>
  };
})();
