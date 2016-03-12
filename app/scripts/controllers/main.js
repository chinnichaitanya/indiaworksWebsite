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
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.changeServiceHoverImage = function () {
    	document.getElementById("serviceName").src="images/plumbing-01-onhover-01.png";
    };

    $scope.changeServiceHoverImageBack = function () {
    	document.getElementById("serviceName").src="images/plumbing-01-01.png";
    };

  });
