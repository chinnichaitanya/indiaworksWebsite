'use strict';

angular.module('indiaworks16App')
  .controller('TrackingCtrl', function ($scope, $routeParams, ApiService) {
		
		$scope.ticketId = $routeParams.ticketId;
		$scope.ticketDetails = {};
		ApiService.getSingleTicketDetails($scope.ticketId, false, false, false)
			.then(function (response) {
				console.log(response);
				$scope.ticketDetails = response.data;
			});

  });
