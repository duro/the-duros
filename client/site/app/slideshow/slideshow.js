define(function(require, exports, module) {

  var angular = require('angular')
    , _       = require('underscore')
    , $       = require('jquery')
    , async   = require('async')
    , Swipe   = require('swipe');

  module.exports = angular.module('slideshow', [])

  .directive('slideshow', [function (){
    return {
      restrict: 'A',
      scope: true,
      link: function (scope, element, attrs){
        var imgs = scope.$eval(attrs.slideshow)
          , $container, swipe, $leftArrow, $rightArrow;

        $container   = element.find('.swipe-wrap');
        $leftArrow   = element.find('.left-arrow');
        $rightArrow  = element.find('.right-arrow');

        function loadImage (imgSrc, cb) {
          var imgLoader = new Image();
          imgLoader.src = imgSrc;
          imgLoader.onload = function (event){
            var $img = $(imgLoader);
            $img.attr({width: '100%', height: '100%'});
            $container.append($('<div></div>').html($img));
            cb();
          };
        }

        async.eachSeries(imgs, loadImage, function (err){

          $('swipe-wrap > div > img').each(function() {
            var $img = $(this);
          });

          swipe = new Swipe($container.parent()[0], {
            auto: 5000,
            speed: 800
          });

          $leftArrow.click(function(event) {
            swipe.prev();
          });

          $rightArrow.click(function(event) {
            swipe.next();
          });

        });

      }
    };
  }]);

});