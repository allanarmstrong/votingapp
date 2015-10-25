'use strict';

describe('Controller: ViewPollCtrl', function () {

  // load the controller's module
  beforeEach(module('votingappApp'));

  var ViewPollCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewPollCtrl = $controller('ViewPollCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
