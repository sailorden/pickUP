'use strict';

angular.module('pickUp')

.controller('DashboardCtrl', ['$scope', '$location', function($scope, $location) {

  $scope.pickUpShown = null;
  $scope.pickUpLines = [
    {
      _id: '001',
      line: "Let's act like a calendar and date!",
      date: '04/27 7:42pm',
      numberOfResponses: 8,
      lat: '37',
      long: '-122',
      responses: [
        {
          _id: '00A',
          name: 'Lisa',
          image: 'http://freedwallpaper.com/wp-content/uploads/2014/12/Best-Cute-Girls-Wallpapers-HD-Desktop.jpg',
          age: '29',
          location: 'Palo Alto, CA',
          response: 'I like that.'
        },
        {
          _id: '00B',
          name: 'Joanie',
          image: 'http://freedwallpaper.com/wp-content/uploads/2014/04/8589130465188-beautiful-faces-cute-girls-wallpaper-hd.jpg',
          age: '31',
          location: 'Mountain View, CA',
          response: 'Yeah man'
        },
        {
          _id: '00C',
          name: 'Sara',
          image: 'http://media.doisongphapluat.com/247/2015/1/16/gai-xinh.jpg',
          age: '24',
          location: 'San Francisco, CA',
          response: "Let's do it!"
        }
      ]
    },
    {
      _id: '002',
      line: "You must be from Tennessee, cuz you're the only 10 I see!",
      date: '04/25 9:20am',
      numberOfResponses: 19,
      lat: '38.9544',
      long: '-77.3464'
    },
    {
      _id: '003',
      line: "Once upon a time I went to market and on the way home I met a man who said he was a genie and I took him at his word.",
      date: '04/24 11:30am',
      numberOfResponses: 173,
      lat: '38.944',
      long: '-77.3464'
    },
  ];

  $scope.togglePickUp = function(pickUpID) {
    if ($scope.pickUpShown === pickUpID) {
      $scope.pickUpShown = null;
    } else {
      $scope.pickUpShown = pickUpID;
    }
  };

  $scope.isPickUpShown = function(pickUpID) {
    return $scope.pickUpShown === pickUpID;
  };

  $scope.goToResponse = function(responderId) {
    $location.path('app/showResponse/' + responderId);
  };

}]);