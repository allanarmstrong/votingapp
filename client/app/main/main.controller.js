'use strict';

angular.module('votingappApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {
    
    $scope.isLoggedIn = Auth.isLoggedIn();
    if ($scope.isLoggedIn){
      $scope.user = Auth.getCurentUser()._name;
    }

  });
