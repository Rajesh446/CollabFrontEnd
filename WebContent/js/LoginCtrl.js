var app = angular.module("myApp", []);

app.controller('LoginController', function($scope) {
	console.log("hello from logincontroller");
      $scope.username = "rajesh";
      $scope.password = "rajesh";
  
});