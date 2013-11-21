'use strict';

describe('Directive: navDrawer', function () {
  beforeEach(module('phonegapPerformanceApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<nav-drawer></nav-drawer>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the navDrawer directive');
  }));
});
