// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'starter.controllers',
  'starter.services.http',
  'starter.services.playerSequencer',
  'starter.services.init',
  'starter.directives.beatBox',
  'starter.controllers.ActiveController',
  'starter.controllers.GameController',
  'starter.controllers.NavController',
  'starter.controllers.PlayerSequencerController',
  'starter.controllers.TargetSequencerController',
  'starter.controllers.ViewController'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('game', {
    url: '/game',
    templateUrl: 'templates/tab-play-sequence.html',
    controller: 'GameController'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/game');

})

.run( [ '$rootScope', 'httpFactory', '$location' , function ( $rootScope, httpFactory, $location ) {

  // $rootScope.$on( '$locationChangeSuccess', function ( ) {
  //
  //   httpFactory.getUser( function ( response ) {
  //
  //     if( response.status === 200 ) {
  //
  //       if( response.headers( 'username' ) ) {
  //
  //         $rootScope.user = {};
  //
  //         $rootScope.user.username = response.headers( 'username' );
  //
  //         $rootScope.user.level = response.headers( 'level' );
  //
  //       }
  //
  //       $location.path( response.data );
  //
  //     }
  //
  //   });
  //
  // });

}]);
