'use strict';

angular.module('indiaworks16App')
  .controller('BookingDetailsCtrl', function ($scope, $routeParams) {
  	
    $scope.ticketId = $routeParams.ticketId;

  });
