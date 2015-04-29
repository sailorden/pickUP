'use strict';

angular.module('pickUp')

.controller('SignupCtrl', ['$scope', '$rootScope', '$state', '$cordovaDatePicker', '$ionicPlatform', 'User', function($scope, $rootScope, $state, $cordovaDatePicker, $ionicPlatform, User) {

  var ref = new Firebase("https://pickupapp.firebaseio.com");
  // saving to database with key of facebook id so it will save and update everytime
  // but won't create multiple database records because the key is always the same
  $scope.createUser = function(user) {
    console.log('user', user);
    ref.child('/users/'+user.id).set({
      name: user.first_name,
      gender: user.gender,
      image: user.picture.data.url,
      age: user.age,
      city: user.city,
      state: user.state
    });
    // console.log('rootscope user',$rootScope.user);
    // console.log('user',user);
    User.save({
      id: user.id,
      name: user.first_name,
      gender: user.gender,
      city: user.city,
      state: user.state,
      age: user.age,
      image: user.picture.data.url
    });
    $state.go('app.dashboard');
  };

  //  var options = {
  //   date: new Date(),
  //   mode: 'date', // or 'time'
  //   minDate: new Date() - 10000,
  //   allowOldDates: true,
  //   allowFutureDates: false,
  //   doneButtonLabel: 'DONE',
  //   doneButtonColor: '#F2F3F4',
  //   cancelButtonLabel: 'CANCEL',
  //   cancelButtonColor: '#000000'
  // };

  // $ionicPlatform.ready(function() {
  //   $cordovaDatePicker.show(options).then(function(date){
  //     alert(date);
  //   });
  // });

  // document.addEventListener("deviceready", function () {
  //   // $scope.showDatePicker = function() {
  //     $cordovaDatePicker.show(options).then(function(date){
  //         alert(date);
  //     });
  //   // };

  // }, false);





  // $scope.dates = { day: [], month: [], year: []};
  // // $scope.days = [];
  // // $scope.months = [];
  // // $scope.years = [];

  // $scope.initMonths = function() {
  // // days
  //   for (var i=1; i<=12; i++) {
  //     var month;
  //     if (i<10) {
  //       month = '0' + i;
  //     } else {
  //       month = i.toString();;
  //     }
  //     $scope.dates.month.push(month);
  //   }
  // };

  // $scope.initMonths();

}]);