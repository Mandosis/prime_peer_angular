var app = angular.module('todo', []);

app.controller('MainController', function($scope) {
  $scope.items = [];
  $scope.addItem = function(item) {
    console.log('New item:', item);
    $scope.items.push(item);
  };
});
