'use strict';

angular.module('angularEssaiApp').controller('GithubCtrl', function ($scope, $http) {

  $scope.repositories = [];

  /**
   * Search matching GitHub repositories
   */
  $scope.searchRepositories = function() {
    $http({ method: 'GET', url: 'https://api.github.com/legacy/repos/search/' + $scope.searchTerm })
      .success(function(data) {
        $scope.repositories = data.repositories;
        $scope.searchTerm = '';
      })
      .error(function() {
        console.log('ouch');
      });
  };

});