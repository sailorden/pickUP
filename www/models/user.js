'use strict';

angular.module('pickUp')

.factory('User', [function() {

  var user = {};

  function save(savedUser) {
    user = savedUser;
    console.log('userSave:', user);
    return user;
  };

  function get() {
    console.log('userGet:', user);
    return user;
  };

  return { save: save, get: get };

  // var userRef = new Firebase("https://pickupapp.firebaseio.com/users");

  // function status(user) {
  //   // Create a callback which logs the current auth state
  //   function authDataCallback(authData) {
  //     if (authData) {
  //       console.log("User " + authData.uid + " is logged in with " + authData.provider);
  //     } else {
  //       console.log("User is logged out");
  //     }
  //   }

  //   // Register the callback to be fired every time auth state changes
  //   var ref = new Firebase("https://pickupapp.firebaseio.com");
  //   ref.onAuth(authDataCallback);
  // }


  // return { status: status };

}]);