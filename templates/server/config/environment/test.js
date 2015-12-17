(function IIFE() {
  'use strict';

  module.exports = {
    <% if(mongoose) { %>mongo: {
      uri: 'mongodb://localhost/<%= appNameSlug %>-test'
    }<% } %>
  };
})();
