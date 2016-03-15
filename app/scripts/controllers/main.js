'use strict';

/**
 * @ngdoc function
 * @name indiaworks16App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the indiaworks16App
 */
angular.module('indiaworks16App')
  .controller('MainCtrl', function ($scope, GeoLocationService) {

    $scope.selectedService = "";
    $scope.servicesList = [{
      'name': 'Service 1',
      '_id': 'one'
    },
    {
      'name': 'Service 2',
      '_id': 'two'
    },
    {
      'name': 'Service 3',
      '_id': 'three'
    },
    {
      'name': 'Service 4',
      '_id': 'four'
    }];
    
    $scope.changeServiceHoverImage = function () {
    	document.getElementById("serviceName").src="images/plumbing-01-onhover-01.png";
    };

    $scope.changeServiceHoverImageBack = function () {
    	document.getElementById("serviceName").src="images/plumbing-01-01.png";
    };

    $scope.keyPress = function (clickEvent) {
      if(clickEvent.keyCode === 13) {
        
      }
    };

    GeoLocationService.getCurrentLocation().then(function (onUserLocationFound) {
    	var x = onUserLocationFound;
    	console.log(x);
    });

  });
