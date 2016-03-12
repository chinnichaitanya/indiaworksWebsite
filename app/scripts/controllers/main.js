'use strict';

/**
 * @ngdoc function
 * @name indiaworks16App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the indiaworks16App
 */
angular.module('indiaworks16App')
  .controller('MainCtrl', function (GeoLocationService) {
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    GeoLocationService.getCurrentLocation().then(function (onUserLocationFound) {
    	var x = onUserLocationFound;
    	console.log(x);
    });

  });
