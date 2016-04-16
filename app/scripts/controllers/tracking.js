'use strict';

angular.module('indiaworks16App')
  .controller('TrackingCtrl', function ($scope, $routeParams, ApiService) {
		
		$scope.ticketId = $routeParams.ticketId;
		$scope.ticketDetails = {};
		ApiService.getTicketDetails($scope.ticketId)
			.then(function (response) {
				console.log(response);
				$scope.ticketDetails = response.data;
			});
		

  });
