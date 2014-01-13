define(function(require, exports, module) {
  'use strict';

  // Load Dependencies
  var angular = require('angular')
    , _       = require('underscore')
    , $       = require('jquery');

  // Load Angular Modules
  require('angular-animate');
  require('templates');
  require('ui.router');
  require('header/header');
  require('welcome/welcome');
  require('waypoint/waypoint');
  require('scrollTo/scrollTo');
  require('slideshow/slideshow');

  // Define Application Module
  var app = module.exports.app = angular.module('site', [
    // Define dependencies
    'templates-app', 'ui.router', 'waypoint', 'scrollTo',
    'header', 'welcome', 'slideshow', 'ngAnimate'
  ])

  // Configure Application
  .config(function ($urlRouterProvider) {
    // Set default route
    $urlRouterProvider.otherwise( '/welcome' );
  })

  // Define globals on rootScope
  .run(function ($rootScope, $state, $stateParams) {

    // Mirror $state and $stateParams onto the rootScope
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

  });

});
