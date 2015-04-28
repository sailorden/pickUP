'use strict';

angular.module('pickUp')

.controller('HistoryCtrl', ['$scope', function($scope) {

  $scope.user = {
    stats: {
      myLines: {
        numberOfDrops: 10,
        numberOfViews: 200,
        dropResponses: 57,
        dropAcceptedNumber: 39
      },
      theirLines: {
        numberOfViews: 422,
        numberRespondedTo: 106,
        acceptedNumber: 13
      }
    }
  };

  $scope.pickUpRate = Math.floor(($scope.user.stats.myLines.dropResponses / $scope.user.stats.myLines.numberOfViews) * 100);
  $scope.gettingPickedUpRate = Math.floor(($scope.user.stats.theirLines.acceptedNumber / $scope.user.stats.theirLines.numberRespondedTo) * 100);

}]);