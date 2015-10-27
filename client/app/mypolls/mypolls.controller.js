'use strict';

angular.module('votingappApp')
  .controller('MypollsCtrl', function ($scope, $http, Auth) {
    
  	var currUser = Auth.getCurrentUser()._id;
  	$scope.polls = '';
  	$scope.noPolls = false;

  	$scope.addVotes = function(idx) {
  		var answers = $scope.polls[idx].answers;
  		var sum = 0;
  		_.forEach(answers, function(n) {
  			sum = sum + n.votes;
  		});

  		return sum;
  	};

  	$http.get('/api/polls/by/' + currUser).success(function(data) {
  		$scope.polls = data;
  		if (data.length === 0) {
  		  	$scope.noPolls = true;
  		}
  	});
  });

