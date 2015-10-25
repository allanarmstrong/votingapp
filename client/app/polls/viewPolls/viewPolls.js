'use strict';

angular.module('votingappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/polls/view', {
        templateUrl: 'app/polls/viewPolls/viewPolls.html',
        controller: 'ViewPollsCtrl'
    });
  });
