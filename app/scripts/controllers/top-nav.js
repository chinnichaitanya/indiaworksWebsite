'use strict';

angular.module('indiaworks16App')
  .controller('TopNavCtrl', function ($scope, $location) {
  	$scope.isActive = function (route) {
  		console.log($location.path());
      return route === $location.path();
  	};
  });
