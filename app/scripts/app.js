'use strict';

angular.module('angularEssaiApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/todolist', {
        templateUrl: 'views/todolist.html',
        controller: 'TodoCtrl'
      })
      .when('/github', {
        templateUrl: 'views/github.html',
        controller: 'GithubCtrl'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
