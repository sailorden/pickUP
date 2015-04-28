'use strict';

angular.module('pickUp')

.controller('DashboardCtrl', ['$scope', function($scope) {

  $scope.pickUpLines = [
    {
      line: "Let's act like a calendar and date!",
      date: '04/27 7:42pm',
      numberOfResponses: 8
    },
    {
      line: "You must be from Tennessee, cuz you're the only 10 I see!",
      date: '04/25 9:20am',
      numberOfResponses: 19
    },
  ];

  $scope.views = [
    {
      name: 'Lisa',
      image: 'http://freedwallpaper.com/wp-content/uploads/2014/12/Best-Cute-Girls-Wallpapers-HD-Desktop.jpg',
      age: '29',
      location: 'Palo Alto, CA',
      response: 'I like that.'
    },
    {
      name: 'Joanie',
      image: 'http://freedwallpaper.com/wp-content/uploads/2014/04/8589130465188-beautiful-faces-cute-girls-wallpaper-hd.jpg',
      age: '31',
      location: 'Mountain View, CA',
      response: 'Yeah man'
    },
    {
      name: 'Sara',
      image: 'http://media.doisongphapluat.com/247/2015/1/16/gai-xinh.jpg',
      age: '24',
      location: 'San Francisco, CA',
      response: "Let's do it!"
    }
  ];

}]);