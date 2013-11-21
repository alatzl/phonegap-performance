'use strict';

angular.module('phonegapPerformanceApp', ['btford.phonegap.ready', 'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
