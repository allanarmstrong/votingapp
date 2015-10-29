'use strict';

angular.module('votingappApp')
  .controller('MypollsCtrl', function ($scope, $http, Auth) {
    
  	var currUser = Auth.getCurrentUser()._id;
  	$scope.polls = '';
  	$scope.noPolls = true;

  	$scope.addVotes = function(idx) {
  		var answers = $scope.polls[idx].answers;
  		var sum = 0;
  		_.forEach(answers, function(n) {
  			sum = sum + n.votes;
  		});

  		return sum;
  	};

    $scope.deletePoll = function (pollID) {
      $http.delete('/api/polls/' + pollID).success(function(polls) {
        $scope.polls = polls;
        if (polls.length === 0) {
          $scope.noPolls = true;
        }
      });

    };

  	$http.get('/api/polls/by/' + currUser).success(function(data) {
  		$scope.polls = data;
  		if (data.length === 0) {
  		  	$scope.noPolls = true;
  		}
  	});
  });

