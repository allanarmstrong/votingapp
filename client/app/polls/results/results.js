'use strict';

angular.module('votingappApp')
  .config(function ($routeProvider) {
    $routeProvider
    	.when('/polls/results', { 
    		templateUrl: 'app/polls/results/noresults.html',
    		controller: 'ResultsCtrl'
    })
      .when('/polls/results/:pollID', {
        templateUrl: 'app/polls/results/results.html',
        controller: 'ResultsCtrl'
      });
  });
