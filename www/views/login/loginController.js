'use strict';

angular.module('pickUp')

.controller('LoginCtrl', ['$scope', '$state', function($scope, $state) {

  setTimeout(function() {
    $state.go('app.dashboard')
  }, 2000);

}]);