'use strict';

angular.module('angularEssaiApp').controller('GalleryCtrl', function ($scope, $http) {
  $scope.images = [];
  $scope.current = {};

  $scope.loadImages = function() {
    $http.get('/data/gallery.json').success($scope.initGallery);
  };

  $scope.initGallery = function(data) {
    $scope.images = data;
    $scope.current = data[0];
  };

  $scope.setCurrent = function(image) {
    $scope.current = image;
  };

  $scope.loadImages();
});