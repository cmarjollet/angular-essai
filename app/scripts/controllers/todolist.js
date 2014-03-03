'use strict';

angular.module('angularEssaiApp').controller('TodoCtrl', function ($scope) {

  $scope.todos = [
    { name: 'learn angular', done: false },
    { name: 'aurora graph', done: false },
    { name: 'canada map', done: true }
  ];

  /**
   * Add a new task to todo list
   */
  $scope.addTodo = function() {
    $scope.todos.push({
      name: $scope.todoText,
      done: false
    });
    $scope.todoText = '';
  };

  /**
   * Remove completed tasks from todo list
   */
  $scope.clearCompletedTodos = function() {
    $scope.todos = $scope.todos.filter(function(todo) {
      return !todo.done;
    });
  };

});