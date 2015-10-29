'use strict';

angular.module('votingappApp')
  .controller('CreateCtrl', function ($scope, $http, Auth, $location, $sanitize) {
  	$scope.form = {
		question: '',
		answers: [],
		userID: Auth.getCurrentUser()._id
	};

	$scope.question = '';

	$scope.options = [{option: 'Yes'}, {option: 'No'}];

	$scope.submit = function() {
		$scope.form.question = $sanitize($scope.question);
		$scope.form.answers = $scope.options;
		$http.post('/api/polls', $scope.form).success(function(poll) {
			$location.path('/polls/view/' + poll._id);
		});
	};

	$scope.addOption = function() {
		$scope.options.push({option: 'Option ' + Number($scope.options.length+1)});
	};

	$scope.removeOption = function(index) {
		if ($scope.options.length > 2) {
			$scope.options.splice(index, 1);
		}
		// Otherwise do nothin cause we need at least 3 options.
	};
  });
