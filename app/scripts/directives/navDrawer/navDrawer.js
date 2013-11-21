'use strict';

angular.module('phonegapPerformanceApp')
  .directive('navDrawer', function () {
    return {
      templateUrl: 'scripts/directives/navDrawer/navDrawer.html',
      restrict: 'A',
      replace: true,
      scope: true,
      controller: 'NavDrawerCtrl'
    };
  })
  .controller('NavDrawerCtrl', function($scope, drawerState) {
    $scope.onNavigationClicked = function(e) {
      if (e.target.tagName === 'A' && e.target.href) {
        drawerState.close();
      }
    }
  });
