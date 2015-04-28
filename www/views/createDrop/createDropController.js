'use strict';

angular.module('pickUp')

.controller('CreateDropCtrl', ['$scope', '$cordovaGeolocation', function($scope, $cordovaGeolocation) {

  var lat, long;

  var posOptions = { timeout: 10000, enableHighAccuracy: true };
  
  $cordovaGeolocation
  .getCurrentPosition(posOptions)
  .then(function(position) {
    $scope.lat = position.coords.latitude;
    $scope.long = position.coords.longitude;
  }, function(err) {
    console.log('ERROR WITH CORDOVA GEOLOCATION', err);
  });

}]);