'use strict';

angular.module('angularEssaiApp').controller('GalleryCtrl', function ($scope, $http) {
  $scope.images = [];
  $scope.current = {};

  /**
   * Load gallery
   */
  $scope.loadImages = function() {
    $http.get('/data/gallery.json').success($scope.initGallery);
  };

  /**
   * Initialize gallery 
   */
  $scope.initGallery = function(data) {
    $scope.images = data;
    $scope.current = data[0];
  };

  /**
   * Change current image
   */
  $scope.setCurrent = function(image) {
    $scope.current = image;
  };

  $scope.loadImages();
});