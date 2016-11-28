var app = angular.module('myApp', ['ngRoute','signmyApp']);

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
    controller  : 'blog'
 })
 
  .when('/forum', {
    templateUrl : 'html/forum.html',
    controller  : 'Forumcontroller'
 })


  .otherwise({redirectTo: '/'});
});