'use strict';

angular.module('votingappApp')
  .controller('ViewPollsCtrl', function ($scope, $http, $location) {
    $http.get('/api/polls').success(function(data) {
    	//console.log(data);
    	if (data.length > 0) {
    		$scope.polls = data;
    		$scope.noPolls = false;
    	} else {
    		$scope.noPolls = true;
    	}

    }).error(function(data, status) {
    	$location.path('/polls/view');
    });
  });
