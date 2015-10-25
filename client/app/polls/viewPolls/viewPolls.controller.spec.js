'use strict';

describe('Controller: ViewPollsCtrl', function () {

  // load the controller's module
  beforeEach(module('votingappApp'));

  var ViewPollsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewPollsCtrl = $controller('ViewPollsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
