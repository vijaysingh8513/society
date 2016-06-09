// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic',
'societyApp.login',
'societyApp.admin-profile',
'societyApp.tenant-profile',
'societyApp.guard-profile',
'societyApp.menu',
'ngCordova',
'ngCordovaOauth'

])
.value('_', window._)
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($urlRouterProvider, $compileProvider, $httpProvider) {
	$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile|content):|data:image\//);
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/login');

  $httpProvider.interceptors.push(['$q', '$location', '$window', function($q, $location, $window) {
            return {
                'request': function (config) {
                    config.headers = config.headers || {};
                    if ($window.localStorage.accesstoken) {
                        config.headers.Authorization = 'Bearer ' + $window.localStorage.accesstoken;

                    }
                   
                    return config;
                },
                'responseError': function(response) {
                    if(response.status === 401 || response.status === 403) {
                        $location.path('/signin');
                    }
                    return $q.reject(response);
                }
            };
        }]);

})
.config(function($ionicConfigProvider) 
{
  // Remove back button text completely
  $ionicConfigProvider.backButton.previousTitleText(false).text('');
})

