require.config({
  paths: {
    'almond'              : '../vendor/almond/almond',
    'angular'             : '../vendor/angular/angular',
    'angular-animate'     : '../vendor/angular-animate/angular-animate',
    'jquery'              : '../vendor/jquery/jquery',
    'underscore'          : '../vendor/lodash/dist/lodash.underscore',
    'ui.router'           : '../vendor/angular-ui-router/release/angular-ui-router',
    //'stellar'             : '../vendor/angularjs-stellar/vendor/jquery.stellar.min',
    //'ng-stellar'          : '../vendor/angularjs-stellar/js/stellar.directives',
    'waypoints'           : '../vendor/jquery-waypoints/waypoints',
    'jquery-scrollTo'     : '../vendor/jquery-scrollto/jquery.scrollTo-1.4.3.1',
    'swipe'               : '../vendor/swipe/swipe',
    'async'               : '../vendor/async/lib/async'
  },
  baseUrl: 'app',
  shim: {
    'jquery'          : {exports  : 'jQuery'},
    'angular'         : {exports  : 'angular', deps : ['jquery']},
    'angular-animate' : ['angular'],
    'ui.router'       : ['angular'],
    'jquery-scrollTo' : ['jquery']
    //'stellar'         : ['jquery'],
    //'ng-stellar'      : ['stellar', 'angular']
  },
  priority: [
    "angular"
  ]
});
