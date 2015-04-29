'use strict';

angular.module('pickUp')

.controller('LoginCtrl', ['$scope', '$state', '$timeout', '$rootScope', function($scope, $state, $timeout, $rootScope) {

  var ref = new Firebase("https://pickupapp.firebaseio.com");
  $scope.notLoggedIn = false;

  function authDataCallback(authData) {
    if (authData) {
      // console.log("User " + authData.uid + " is logged in with " + authData.provider);
      $state.go('app.dashboard');
    } else {
      // user is logged out, display login button
      $scope.notLoggedIn = true;
    }
  }

    
  // Wait two seconds, then check if user is logged in.
  // If user is logged in, route to inside app, otherwise display login button
  $timeout(function() {
    ref.onAuth(authDataCallback);
  }, 2000);

  $scope.login = function() {
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
        alert('error');
      } else {
        console.log("Authenticated successfully with payload:", authData);
        var blah = ref.child('/users/'+authData.facebook.id).set({
          name: authData.facebook.cachedUserProfile.first_name,
          gender: authData.facebook.cachedUserProfile.gender,
          image: authData.facebook.cachedUserProfile.picture.data.url
        });
        $rootScope.user = {
          userId: authData.facebook.id,
          name: authData.facebook.cachedUserProfile.first_name,
          image: authData.facebook.cachedUserProfile.picture.data.url
        };
        // Users.status()
        // console.log(localStorage['firebase:session::pickupapp']);
        $state.go('app.dashboard');
      }
    });
  };

// https://graph.facebook.com/v2.3/me?access_token=CAAJY5SvnGO0BACp7ITknSPAeNGYzmogTvpfK6f0CXAcnZAKMNNFO0K7kJnaGCkP3yzJ9rRQUfscYqH8DqetQjjVPwYsTm18tZCswZASpMP3shSWEv8NvHCBdduwZATVaiZBVXegZCtwPwZCdEdLxIZCUSeGrFQ0R8TDsZBFhQFNTj0iPDTxdKZAaity9kuoQV7ZC2lE19T2xgsdNzZCBctxbt1DT&fields=id,name,picture
}]);