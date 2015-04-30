'use strict';

/*
  Splash page displays for two seconds then checks if user is logged in.
  If the user is logged in already then it saves the user's data locally
  in the Angular factory and routes to the dashboard.
  If the user isn't logged in then it routes to the login view.
*/

angular.module('pickUp')

.controller('SplashPageCtrl', ['$scope', '$timeout', '$state', 'User', function($scope, $timeout, $state, User) {

  var ref = new Firebase("https://pickupapp.firebaseio.com");

  // function to call if they are already logged in
  function authDataCallback(authData) {
    // if they are logged in, check if they are in the database
    if (authData) {
      // check database
      ref.child('/users').orderByKey().equalTo(authData.facebook.id).limitToFirst(1).once('value', function(snapshot) {
        console.log('snapshot splash', snapshot.val());
      // if logged in but not in database, user quit in the process of signing up,
      // so user is still signing up, so go to signup view.
        if (snapshot.val() === null) {
          $state.go('signup');
        } else {  // if user in database, save user locally and route to dashboard
          // var user = {
          //   userId: authData.facebook.id,
          //   name: authData.facebook.cachedUserProfile.first_name,
          //   gender: authData.facebook.cachedUserProfile.gender,
          //   image: authData.facebook.cachedUserProfile.picture.data.url
          // };
          User.save(snapshot.val()[authData.facebook.id]);
          console.log('going to dash from splash');
          $state.go('app.dashboard');
        }
      });
    } else {  // if user is logged out, go to login view
      $state.go('login');
    }
  }

  // Wait two seconds, then check if user is logged in.
  // If user is logged in, route to inside app, otherwise display login button
  $timeout(function() {
    ref.onAuth(authDataCallback);
  }, 2000);

}]);