(function IIFE(){
  'use strict';

  module.exports = {
    create<%= modelCapitalCase %>: require('./create<%= modelCapitalCase %>'),
    delete<%= modelCapitalCase %>: require('./delete<%= modelCapitalCase %>'),
    get<%= modelCapitalCase %>: require('./get<%= modelCapitalCase %>'),
    update<%= modelCapitalCase %>: require('./update<%= modelCapitalCase %>')
  };
})();
