'use strict';

angular.module('votingappApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {
    $scope.isLoggedIn = Auth.isLoggedIn();
    console.log(Auth.isLoggedIn());
    if (Auth.isLoggedIn()) {
      $scope.name = Auth.getCurrentUser().name;
      console.log($scope.name);
    }

  });
