'use strict';

angular.module('indiaworks16App')
  .controller('BookingDetailsCtrl', function ($scope, $routeParams, ApiService) {
  	
    $scope.ticketId = $routeParams.ticketId;
    $scope.ticket = '';
    ApiService.getTicketDetails($scope.ticketId)
    	.then(function (response) {
    		console.log(response);
    		$scope.ticket = response.data;
    	});

  });
