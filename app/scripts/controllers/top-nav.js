'use strict';

angular.module('indiaworks16App')
  .controller('TopNavCtrl', function ($scope, $location) {
  	$scope.isActive = function (route) {
      return route === $location.path();
  	};
  });
