var app = angular.module('myApp', ['ngRoute','signmyApp','blogmyApp','forummyApp']);

app.config(function($routeProvider) {
  $routeProvider

   .when('/register', {
    templateUrl : 'html/Signup.html',
    controller  : 'Registercontroller'
 })
 
  .when('/login', {
    templateUrl : 'html/login.html',
    controller  : 'LoginController',
    	controllerAs:'vm'

 })
 
  .when('/blog', {
    templateUrl : 'html/Blog.html',
    controller  : 'blogcntrl'
 })
 
  .when('/Forum', {
    templateUrl : 'html/Forum.html',
    controller  : 'forumcntrl'
 })


  .otherwise({redirectTo: '/'});
});