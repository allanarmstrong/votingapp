'use strict';

angular.module('votingappApp')
  .controller('ViewPollsCtrl', function ($scope, $http, $location) {
    $http.get('/api/polls').success(function(data) {
    	console.log(data);
    	$scope.polls = data;
    }).error(function(data, status) {
    	console.log(status, data);
    	$location.path('/polls/view');
    });
  });
