/*var app = angular.module("myApp", []);

app.controller('SignupCtrl', function($scope) {
	console.log("hello from Signupcontroller");
      $scope.Name = "rajesh";
      $scope.Username= "rajesh";
  
});*/


var app = angular.module('signmyApp',[]);
app.controller('Registercontroller', [ '$scope', '$http', function($scope, $http) {
	var BASE_URL = 'http://localhost:8081/MyChat';

console.log("registering");
	$scope.submit = function() {
		
		console.log("done:");
	

		$scope.users = {	
			
			username : $scope.username,
			password:$scope.password,
			address:$scope.address,
			mail: $scope.mail,
			mobile:$scope.mobile,
			gender:$scope.gender,
			dob:$scope.dob,
			
		}
		$http({
			method : 'POST',
			url : BASE_URL + '/register',
			data : $scope.users
		}).success(function(data, status, headers, config) {
			$scope.username='';
			$scope.password='';
			$scope.dob='';
			$scope.mail='';
			$scope.mobile='';
			$scope.gender='';
			
		
		}).error(function(data,status,headers,config){
			alert("success");
		});
	};
}]);