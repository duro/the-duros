// Include our config
require(['config'], function() {
  // Kickoff our app
  require( [
    'jquery',
    'angular',
    'app'
  ], function($, angular, app) {
    'use strict';
    // Bootstrap this bitch
    angular.bootstrap(document, ['site']);
  });
});
