'use strict';

angular.module('indiaworks16App')
  .controller('BookingDetailsCtrl', function ($scope, $routeParams, ApiService) {
  	
    $scope.ticketId = $routeParams.ticketId;
    $scope.ticket = '';
    ApiService.getSingleTicketDetails($scope.ticketId, true, true, true)
    	.then(function (response) {
    		console.log(response);
    		$scope.ticket = response.data;
    	});

  });
