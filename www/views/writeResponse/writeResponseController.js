'use strict';

angular.module('pickUp')

.controller('WriteResponseCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {

  var pickedUpDrops = [
    {
      _id: 'XX1',
      name: 'Lizabelle',
      image: 'http://www.deskbeauty.net/data/media/17/Cute%20Girls%20Wallpapers%2016.jpg',
      age: '24',
      location: 'Palo Alto, CA',
      line: "Hey I'm a chick, let's go out tonight and grab a drink",
      bio: "I like sports",
      dateLeft: '04/28 10:12am',
      datePickedUp: '04/28 12:29pm',
      lat: '39.01',
      long: '-122.78'
    },
    {
      _id: 'XX2',
      name: 'Jennifer',
      image: 'https://niajablogger.files.wordpress.com/2014/01/high-res-hot-girls-get-the-phalanx-ciws-firing-34-hq-photos.jpg',
      age: '28',
      location: 'Redwood City, CA',
      line: "Hey handsome, let's go out.",
      bio: "I'm a bookworm, buy me dinner and let's talk poetry",
      dateLeft: '04/28 9:47am',
      datePickedUp: '04/28 12:01pm',
      lat: '39.00',
      long: '-122.78'
    }
  ];

  for (var pickup in pickedUpDrops) {
    if (pickedUpDrops[pickup]._id === $stateParams.pickUpId)
      $scope.pickup = pickedUpDrops[pickup];
  }

  console.log($scope.pickup);

}]);