var app = angular.module('myApp', ['ngRoute','signmyApp','blogmyApp','forummyApp']);

app.config(function($routeProvider) {
  $routeProvider

   .when('/register', {
    templateUrl : 'html/Signup.html',
    controller  : 'Registercontroller'
 })
 
  .when('/login', {
    templateUrl : 'html/login.html',
    controller  : 'Logincontroller'
 })
 
  .when('/blog', {
    templateUrl : 'html/Blog.html',
    controller  : 'blogcntrl'
 })
 
  .when('/Forum', {
    templateUrl : 'html/Forum.html',
    controller  : 'forumctrl'
 })


  .otherwise({redirectTo: '/'});
});