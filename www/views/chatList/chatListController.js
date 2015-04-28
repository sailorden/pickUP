'use strict';

angular.module('pickUp')

.controller('ChatListCtrl', ['$scope', function($scope) {

  $scope.chatters = [
    {
      name: 'Joy',
      image: 'http://upload.wikimedia.org/wikipedia/commons/b/b9/Female_model_4.jpg',
      age: '28',
      location: 'San Francisco, CA'
    },
    {
      name: 'Jen',
      image: 'http://th03.deviantart.net/fs71/PRE/i/2010/243/8/7/wearsheep_female_model_by_esmeagoll-d2xoqoi.jpg',
      age: '23',
      location: 'Oakland, CA'
    },
    {
      name: 'Meghan',
      image: 'http://upload.wikimedia.org/wikipedia/commons/7/7c/Female_model.jpg',
      age: '25',
      location: 'San Jose, CA'
    }
  ];

}]);