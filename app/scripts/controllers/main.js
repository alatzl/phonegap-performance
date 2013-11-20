'use strict';

angular.module('phonegapPerformanceApp')
  .controller('MainCtrl', function ($scope, drawerState) {
    console.log('bam', drawerState.isOpen());

    $scope.toggleNav = function() {
      console.log('toggling');
      drawerState.toggle();
    };
  });

angular.module('phonegapPerformanceApp')
  .service('drawerState', function($rootScope) {
    console.log('in service');
    var navOpen = false;

    var obj = {
      isOpen: function() { return navOpen },
      toggle: function() { console.log('laksdjf'); navOpen = !navOpen; },
      close: function() { navOpen = false; }
    };

    return obj;
  });
