'use strict';

angular.module('pickUp')

.controller('LoginCtrl', ['$scope', '$state', '$timeout', '$rootScope', 'User', function($scope, $state, $timeout, $rootScope, User) {

  var ref = new Firebase("https://pickupapp.firebaseio.com");
  // $scope.notLoggedIn = false;


  // function to call if they are already logged in
  // function authDataCallback(authData) {
  //   if (authData) {
  //     // console.log("User " + authData.uid + " is logged in with " + authData.provider);
  //     var user = {
  //       userId: authData.facebook.id,
  //       name: authData.facebook.cachedUserProfile.first_name,
  //       gender: authData.facebook.cachedUserProfile.gender,
  //       image: authData.facebook.cachedUserProfile.picture.data.url
  //     };
  //     User.save(user);
  //     $state.go('app.dashboard');
  //   } else {
  //     // user is logged out, display login button
  //     $scope.notLoggedIn = true;
  //   }
  // }

  // // Wait two seconds, then check if user is logged in.
  // // If user is logged in, route to inside app, otherwise display login button
  // $timeout(function() {
  //   ref.onAuth(authDataCallback);
  // }, 2000);

// when the login button is clicked
  $scope.login = function() {
    // ref.authWithOAuthRedirect("facebook", function(error) {
    //   if (error) {
    //     console.log("Login Failed!", error);
    //   } else {
    //     // We'll never get here, as the page will redirect on success.
    //     $state.go('signup');
    //   }
    // });


    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
        alert('error');
      } else {
        // console.log("Authenticated successfully with payload:", authData);

      // checks if they are already in the database
        ref.child('/users').orderByKey().equalTo(authData.facebook.id).limitToFirst(1).once('value', function(snapshot) {
          console.log('results', snapshot.val());

        // if not in database, user is signing up, so go to signup view
          if (snapshot.val() === null) {
            console.log('authData', authData);
            $rootScope.user = authData.facebook.cachedUserProfile;
            $state.go('signup');
          } else {  // if user in database, just route to dashboard
            // save user data locally
            // var user = {
            //   userId: authData.facebook.id,
            //   name: authData.facebook.cachedUserProfile.first_name,
            //   gender: authData.facebook.cachedUserProfile.gender,
            //   image: authData.facebook.cachedUserProfile.picture.data.url
            // };
            console.log('snapshot', snapshot.val());
            User.save(snapshot.val());
            $state.go('app.dashboard');
          }
        });

// if user is in database get database records and save to factory.
// if user not in database save stuff from authData to rootscope, then to be
// saved to factory after signup


        
      
        // console.log(localStorage['firebase:session::pickupapp']);
      }
    });
  };

// https://graph.facebook.com/v2.3/me?access_token=CAAJY5SvnGO0BACp7ITknSPAeNGYzmogTvpfK6f0CXAcnZAKMNNFO0K7kJnaGCkP3yzJ9rRQUfscYqH8DqetQjjVPwYsTm18tZCswZASpMP3shSWEv8NvHCBdduwZATVaiZBVXegZCtwPwZCdEdLxIZCUSeGrFQ0R8TDsZBFhQFNTj0iPDTxdKZAaity9kuoQV7ZC2lE19T2xgsdNzZCBctxbt1DT&fields=id,name,picture
}]);