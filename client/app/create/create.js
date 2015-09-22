'use strict';

angular.module('votingappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/polls/create', {
        templateUrl: 'app/create/create.html',
        controller: 'CreateCtrl',
        //authenticate: true,
      });
  });
