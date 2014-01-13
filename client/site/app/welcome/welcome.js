define(function(require, exports, module) {

  var angular = require('angular')
    , $       = require('jquery');

  var welcome = module.exports = angular.module('welcome', [])

  .controller('WelcomeCtrl', [
    '$scope', '$element', '$window',
    function ($scope, $element, $window){

      if ($element.height() - 150 > $($window).height()) {
        $scope.downArrowStyle = {
          'top': $($window).height() - $element.find('.down-arrow').height() - 10
        };
      } else {
        $scope.downArrowStyle = {
          'top': $element.height() - 150
        };
      }

    }
  ]);

});
