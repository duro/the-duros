define(function(require, exports, module) {

  var angular = require('angular')
    , $       = require('jquery');

  require('waypoints');

  var header = module.exports = angular.module('header', [])

  .directive('siteHeader', ['$window', function ($window){
    return {
      restrict: 'A',
      scope: true,
      link: function (scope, element, attrs){
        var iOS           = /(iPad|iPhone|iPod)/g.test( $window.navigator.userAgent )
          , hasScrolled   = false
          , inTransition  = false
          , position      = null;

        scope.ogPos = {
          'position': 'absolute',
          'top': Math.round($('section:first').height() - (element.height() / 2))
        };

        if (!iOS) {
          scope.headerPos = scope.ogPos;
          element.addClass('fadein');
        }

        function scrollHandler() {

          function setFixed() {
            scope.headerPos = {
              'position': 'fixed',
              'top': 0
            };
            position = 'fixed';
          }

          function returnToOG() {
            scope.headerPos = scope.ogPos;
            position = 'og';
          }

          if ($($window).scrollTop() >= scope.ogPos['top']) {
            if (iOS && element.css('position') !== 'fixed') {
              if (!inTransition) {
                inTransition = true;
                element.addClass('fadein');
                element.animate({top: $($window).scrollTop()}, 800, 'swing', function(){
                  inTransition = false;
                  scope.$apply(setFixed);
                });
              }
            } else {
              setFixed();
            }
          } else {
            if (iOS && element.position().top !== scope.ogPos.top && position !== 'og') {
              if (!inTransition) {
                inTransition = true;
                element.addClass('fadein');
                element.css({position: 'absolute', top: $($window).scrollTop()});
                element.animate({top: scope.ogPos.top}, 800, 'swing', function(){
                  inTransition = false;
                  scope.$apply(returnToOG);
                });
              }
            } else {
              returnToOG();
            }
          }
        }

        $($window).on('scroll', function() {
          hasScrolled = true;
          scope.$apply(scrollHandler);
        });

        scrollHandler();
      }
    };
  }]);

});
