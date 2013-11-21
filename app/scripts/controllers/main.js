'use strict';

angular.module('phonegapPerformanceApp')
  .controller('MainCtrl', function ($scope, drawerState) {
    $scope.toggleNav = function() {
      drawerState.toggle();
    };
  });

angular.module('phonegapPerformanceApp')
  .service('drawerState', function($rootScope) {
    var navOpen = false;

    var obj = {
      isOpen: function() { return navOpen },
      toggle: function() { navOpen = !navOpen; },
      close: function() { navOpen = false; }
    };

    return obj;
  });
