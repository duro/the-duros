define(function(require, exports, module) {

  var angular = require('angular')
    , $       = require('jquery');

  module.exports = angular.module('waypoint', [])

  .directive('waypoint', [function (){
    return {
      restrict: 'A',
      scope: true,
      link: function(scope, element, attrs) {

        $(attrs.waypoint).waypoint(function (direction){
          element.addClass('active');
          scope.$root.$broadcast('waypoint-changed', element, attrs.waypoint, direction);
        }, {offset: (attrs.waypointOffset) ? +attrs.waypointOffset : 0});

        scope.$on('waypoint-changed', function (event, el, waypoint, direction){
          if (waypoint !== attrs.waypoint) {
            element.removeClass('active');
          }
        });

        scope.$on('waypoint-clearall', function (event, el){
          element.removeClass('active');
        });

      }
    };
  }])

  .directive('waypointClear', [function (){
    return {
      restrict: 'A',
      scope: true,
      link: function (scope, element, attrs){
        element.waypoint(function (direction){
          scope.$root.$broadcast('waypoint-clearall', element);
        });
      }
    };
  }]);

});