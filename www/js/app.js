// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('pickUp', ['ionic', 'ui.router', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('splashPage', {
    url: '/',
    templateUrl: 'views/splashPage/splashPage.html',
    controller: 'SplashPageCtrl'
  })

  .state('login', {
    url: "/login",
    templateUrl: "views/login/login.html",
    controller: 'LoginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'views/signup/signup.html',
    controller: 'SignupCtrl'
  })

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "views/menu/menu.html",
    controller: 'MenuCtrl'
  })

  .state('app.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'views/account/account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('app.chat', {
    url: '/chat',
    views: {
      'menuContent': {
        templateUrl: 'views/chat/chat.html',
        controller: 'ChatCtrl'
      }
    }
  })

  .state('app.chatList', {
    url: '/chatList',
    views: {
      'menuContent': {
        templateUrl: 'views/chatList/chatList.html',
        controller: 'ChatListCtrl'
      }
    }
  })

  .state('app.createDrop', {
    url: '/createDrop',
    views: {
      'menuContent': {
        templateUrl: 'views/createDrop/createDrop.html',
        controller: 'CreateDropCtrl'
      }
    }
  })

  .state('app.dashboard', {
    url: '/dashboard',
    views: {
      'menuContent': {
        templateUrl: 'views/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      }
    }
  })

  .state('app.history', {
    url: '/history',
    views: {
      'menuContent': {
        templateUrl: 'views/history/history.html',
        controller: 'HistoryCtrl'
      }
    }
  })

  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'views/profile/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('app.showResponse', {
    url: '/showResponse/:responderId',
    views: {
      'menuContent': {
        templateUrl: 'views/showResponse/showResponse.html',
        controller: 'ShowResponseCtrl'
      }
    }
  })

  .state('app.writeResponse', {
    url: '/writeResponse/:pickUpId',
    views: {
      'menuContent': {
        templateUrl: 'views/writeResponse/writeResponse.html',
        controller: 'WriteResponseCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
