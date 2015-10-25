'use strict';

angular.module('votingappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user', {
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl',
        authenticate: true,
      });
  });
