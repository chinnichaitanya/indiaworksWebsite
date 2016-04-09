'use strict';

/**
 * @ngdoc overview
 * @name indiaworks16App
 * @description
 * # indiaworks16App
 *
 * Main module of the application.
 */
angular
  .module('indiaworks16App', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap',
    'LocalStorageModule'
  ])
  .config(function ($locationProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
  })  
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('IndiaWorks');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact-us', {
        templateUrl: 'views/contact-us.html',
        controller: 'ContactUsCtrl',
        controllerAs: 'contact'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/book/:category', {
        templateUrl: 'views/booking.html',
        controller: 'BookingCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
