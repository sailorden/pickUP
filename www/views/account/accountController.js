'use strict';

angular.module('pickUp')

.controller('AccountCtrl', ['$scope', '$state', function($scope, $state) {

  var ref = new Firebase("https://pickupapp.firebaseio.com");

  $scope.logout = function() {
    ref.unauth();
    $state.go('login');
  }

  $scope.deleteAccount = function() {
    
  };


}]);