'use strict';

angular.module('pickUp')

.controller('LoginCtrl', ['$scope', '$state', function($scope, $state) {

  

  // setTimeout(function() {
  //   $state.go('app.dashboard')
  // }, 2000);

  $scope.login = function() {
    var ref = new Firebase("https://pickupapp.firebaseio.com");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
        alert('error');
      } else {
        console.log("Authenticated successfully with payload:", authData);
        ref.child('/users').push({
          userId: authData.facebook.id,
          name: authData.facebook.cachedUserProfile.first_name,
          gender: authData.facebook.cachedUserProfile.gender,
          image: authData.facebook.cachedUserProfile.picture.data.url
        });
        // console.log(localStorage['firebase:session::pickupapp']);
        $state.go('app.dashboard');
      }
    });

    // var ref = new Firebase("https://pickupapp.firebaseio.com");
    // ref.authWithOAuthRedirect("facebook", function(error) {
    //   if (error) {
    //     console.log("Login Failed!", error);
    //   } else {
    //     // We'll never get here, as the page will redirect on success.
    //   }
    // });
    // $state.go('app.dashboard');
  };

// https://graph.facebook.com/v2.3/me?access_token=CAAJY5SvnGO0BACp7ITknSPAeNGYzmogTvpfK6f0CXAcnZAKMNNFO0K7kJnaGCkP3yzJ9rRQUfscYqH8DqetQjjVPwYsTm18tZCswZASpMP3shSWEv8NvHCBdduwZATVaiZBVXegZCtwPwZCdEdLxIZCUSeGrFQ0R8TDsZBFhQFNTj0iPDTxdKZAaity9kuoQV7ZC2lE19T2xgsdNzZCBctxbt1DT&fields=id,name,picture
}]);