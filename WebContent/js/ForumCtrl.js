var app = angular.module('forummyApp',[]);
app.controller('forumcntrl', [ '$scope', '$http', function($scope, $http) {
var BASE_URL = 'http://localhost:8081/MyChat';

$scope.getAllBlogs= function() {
console.log("get all forums")
$http({
method : 'GET',
url : BASE_URL+'/Forum'
}).success(function(data, status, headers, config) {
$scope.forums=data;
//alert(data); 
}).error(function(data, status, headers, config) {
alert("Error");
});
};
$scope.submit = function() {
console.log("create forum")

$scope.forum = { 
id:$scope.id,
tittle : $scope.tittle,
userid:$scope.userid,
doc:$scope.doc,
content : $scope.content,
}
$http({
method : 'POST',
url : BASE_URL + '/CreateForum',
data : $scope.forum
}).success(function(data, status, headers, config) {
$scope.id='';
$scope.tittle='';
$scope.userid='';
$scope.doc='';
$scope.content='';
$scope.getAllBlogs();
}).error(function(data,status,headers,config){
alert("error");
});
};
$scope.deleteforum=function(id){
$http({
method:'DELETE',
url:BASE_URL+'/DeleteForum/'+id
}).success(function(data,status,headers,config){
$scope.getAllBlogs();
})
};
$scope.editforum=function(id,tittle,content){
$scope.id=id;
$scope.tittle=tittle;
$scope.content=content;
}
}]);