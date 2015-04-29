'use strict';

angular.module('pickUp')

.controller('ProfileCtrl', ['$scope', 'User', function($scope, User) {

  // $scope.user = {
  //   name: 'Todd Kronenberg',
  //   image: 'https://avatars0.githubusercontent.com/u/7008257?v=3&s=460',
  //   image2: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/p100x100/398991_768525711411_1007958554_n.jpg?oh=366389ef4475202ff58aaac27e00f94f&oe=55D4DCC7&__gda__=1436197934_673fae42559d1976d0d06219d6315267',
  //   bio: 'Creator of this app',
  //   age: '32',
  //   location: 'Redwood City, CA'
  // };

  $scope.user = User.get();
  console.log(User.get());

}]);