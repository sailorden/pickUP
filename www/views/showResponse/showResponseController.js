'use strict';

angular.module('pickUp')

.controller('ShowResponseCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {


  $scope.myLine = 'Hey pretty lady whats going on?';
  $scope.lat = '37';
  $scope.long =  '-122';
  $scope.dateOfDrop = '04/25 5:43pm';

  var responses = [
    {
      _id: '00A',
      name: 'Lisa',
      image: 'http://freedwallpaper.com/wp-content/uploads/2014/12/Best-Cute-Girls-Wallpapers-HD-Desktop.jpg',
      age: '29',
      location: 'Palo Alto, CA',
      response: 'I like that.',
      bio: "I'm a girl named Lisa and I'm cute"
    },
    {
      _id: '00B',
      name: 'Joanie',
      image: 'http://freedwallpaper.com/wp-content/uploads/2014/04/8589130465188-beautiful-faces-cute-girls-wallpaper-hd.jpg',
      age: '31',
      location: 'Mountain View, CA',
      response: 'Yeah man',
      bio: "I'm a girl named Joanie and that is a fun name and I'm fun too!!"
    },
    {
      _id: '00C',
      name: 'Sara Christopherson',
      image: 'http://media.doisongphapluat.com/247/2015/1/16/gai-xinh.jpg',
      age: '24',
      location: 'San Francisco, CA',
      response: "Let's do it!",
      bio: "I am Sara and I live on the wild side"
    }
  ];

// TEMPORARY CODE TO HANDLE FAKE DATA
  for (var girl in responses) {
    if (responses[girl]._id === $stateParams.responderId) {
      $scope.person = responses[girl];
      break;
    }
  }

}]);