'use strict';

angular.module('pickUp')

.directive('pickupToggle', [function() {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        if (!angular.element(elem).hasClass('toggleOn'))
          angular.element(elem).parent().children().toggleClass('toggleOn');
      });
    }
  };

}]);