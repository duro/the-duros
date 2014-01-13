define(function(require, exports, module) {

  var angular = require('angular')
    , $       = require('jquery');

  require('jquery-scrollTo');

  module.exports = angular.module('scrollTo', [])

  .directive('scrollTo', [function (){
    return {
      restrict: 'A',
      scope: true,
      link: function (scope, element, attrs){

        var settings = angular.extend({
          axis: 'y',
          duration: 500,
          easing: 'swing',
          margin: true,
          offset: (attrs.scrollOffset) ? +attrs.scrollOffset : 0
        }, attrs);

        element.on('click', function () {

          $.scrollTo(attrs.scrollTo, settings);
        });

      }
    };
  }]);

});