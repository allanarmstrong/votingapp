'use strict';

angular.module('votingappApp')
  .controller('CreateCtrl', function ($scope) {
  	$scope.form = {
		question: '',
		options: [],
	};

	$scope.question = '';

	$scope.options = [{option: 'Yes'}, {option: 'No'}];

	$scope.submit = function() {
		$scope.form.question = $scope.question;
		$scope.form.options = $scope.options;
		console.log($scope.form);
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
