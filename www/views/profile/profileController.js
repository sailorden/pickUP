'use strict';

angular.module('pickUp')

.controller('ProfileCtrl', ['$scope', function($scope) {

  $scope.user = {
    name: 'Todd Kronenberg',
    picture: 'https://avatars0.githubusercontent.com/u/7008257?v=3&s=460',
    bio: 'Creator of this app',
    age: '32',
    location: 'Redwood City, CA'
  };

}]);