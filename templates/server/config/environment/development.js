(function IIFE() {
  'use strict';

  module.exports = {
    <% if(mongoose) { %>mongo: {
      uri: 'mongodb://localhost/gesto-payments-dev'
    }<% } %>
  };
})();
