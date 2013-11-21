'use strict';

angular.module('phonegapPerformanceApp')
  .controller('PageCtrl', function ($scope, drawerState) {

    $scope.isNavOpen = drawerState.isOpen;

    $scope.onOverlayClicked = function() {
      drawerState.close();
    }
  });
