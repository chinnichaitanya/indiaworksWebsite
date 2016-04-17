'use strict';

/**
 * @ngdoc function
 * @name indiaworks16App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the indiaworks16App
 */
angular.module('indiaworks16App')
  .controller('MainCtrl', function ($scope) {
  // .controller('MainCtrl', function ($scope, GeoLocationService) {

    $scope.changeServiceHoverImage = function () {
    	document.getElementById('serviceName').src='images/plumbing-01-onhover-01.png';
    };

    $scope.changeServiceHoverImageBack = function () {
    	document.getElementById('serviceName').src='images/plumbing-01-01.png';
    };

    // GeoLocationService.getCurrentLocation().then(function (onUserLocationFound) {
    // 	var x = onUserLocationFound;
    // 	console.log(x);
    // });

    $scope.sampleServices = [{
      'name': 'Carpentry',
      'originalImg': 'images/carpentry-02-125x125.png',
      'hoverImg': 'images/carpentry-02-hover-125x125.png'
    },
    {
      'name': 'Plumbing',
      'originalImg': 'images/plumbing-01-125x125.png',
      'hoverImg': 'images/plumbing-01-onhover-125x125.png'
    },
    {
      'name': 'Electricial',
      'originalImg': 'images/electrical-03-125x125.png',
      'hoverImg': 'images/electrical-hover-03-125x125.png'
    }];

  });
