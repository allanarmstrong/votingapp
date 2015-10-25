'use strict';

angular.module('votingappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/polls/view/:pollID', {
        templateUrl: 'app/polls/viewPoll/viewPoll.html',
        controller: 'ViewPollCtrl'
      });
  });
