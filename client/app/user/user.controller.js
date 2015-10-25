'use strict';

angular.module('votingappApp')
  .controller('UserCtrl', function ($scope, $http, Auth) {
  	var userID = Auth.getCurrentUser()._id;
   $http.get('/api/polls/by/' + userID).success(function(polls) {
   	$scope.polls = polls;
   	console.log(polls);
   });
  });
