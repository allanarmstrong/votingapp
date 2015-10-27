'use strict';

angular.module('votingappApp')
  .controller('ViewPollCtrl', function ($scope, $http, $routeParams, $location) {
  	$scope.voteOption = null;
  	$scope.options = '';
  	$scope.poll = '';
  	var pollID = $routeParams.pollID;

    $http.get('/api/polls/' + pollID).success(function(data) {
    	$scope.poll = data;
    	$scope.question = data.question;
    	console.log(data);
    	$scope.options = data.answers;
    	console.log(data.answers);
    });

    $scope.vote = function() {
    	var option = Number($scope.voteOption);
    	console.log('You voted for: ', option);
    	$scope.poll.answers[option].votes = $scope.options[option].votes+1;
    	$http.put('/api/polls/' + $scope.poll._id, $scope.poll).success(function(poll) {
    		console.log(poll);
    		$scope.voteOption = null;
    	});
    	$location.path('/polls/results/' + $scope.poll._id);
    };
  });
