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
    'LocalStorageModule',
    'duScroll'
  ])
  .config(function ($locationProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
  })  
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('IndiaWorks');
  })
  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
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
      .when('/book/:categoryId', {
        templateUrl: 'views/booking.html',
        controller: 'BookingCtrl',
        controllerAs: 'Book'
      })
      .when('/track/:ticketId', {
        templateUrl: 'views/tracking.html',
        controller: 'TrackingCtrl',
        controllerAs: 'Track'
      })
      .when('/booking-details/:ticketId', {
        templateUrl: 'views/booking-details.html',
        controller: 'BookingDetailsCtrl',
        controllerAs: 'bookingDetails'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
