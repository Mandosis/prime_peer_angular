var app = angular.module('todo', []);

app.controller('MainController', function($scope) {
  $scope.items = [];
  $scope.showError = false;

  $scope.addItem = function(item) {

    if($scope.item === '') {
      $scope.showError = true;
    } else {
      $scope.showError = false;
      console.log('New item:', item);
      $scope.items.push({name: item, complete: false});
      $scope.tempTask = '';
    }
  };

  $scope.removeChecked = function() {
    $scope.items = $scope.items.filter(function(task) {
      return task.complete == false;
    });
  };
});
