'use strict';

angular.module('pickUp')

.controller('LoginCtrl', ['$scope', '$state', function($scope, $state) {

  var ref = new Firebase("https://pickupapp.firebaseio.com");

  // setTimeout(function() {
  //   $state.go('app.dashboard')
  // }, 2000);

  $scope.login = function() {
    // ref.authWithOAuthPopup("facebook", function(error, authData) {
    //   if (error) {
    //     console.log("Login Failed!", error);
    //   } else {
    //     console.log("Authenticated successfully with payload:", authData);
    //   }
    // });
    $state.go('app.dashboard');
  };

}]);