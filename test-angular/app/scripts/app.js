'use strict';

var testAngularApp=angular
  .module('testAngularApp', [
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
      .when('/about',{
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .when('/contact',{
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('simpleFactory',function(){
    var things= [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var factory={};
    factory.getThings=function(){return things};
    return factory;

  });
