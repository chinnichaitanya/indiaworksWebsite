'use strict';

angular.module('indiaworks16App')
  .controller('TrackingCtrl', function ($scope, $routeParams, ApiService) {
		
		$scope.ticketConfirmed = false;
		$scope.serviceProviderAssigned = false;
		$scope.ticketResolved = false;

		$scope.ticketId = $routeParams.ticketId;
		$scope.ticketDetails = {};
		ApiService.getSingleTicketDetails($scope.ticketId, false, false, false)
			.then(function (response) {
				console.log(response);
				$scope.ticketDetails = response.data;

				if(response.data.resolved) {
					$scope.ticketResolved = true;
				}
				if(response.data.workersAssigned.length > 0) {
					$scope.serviceProviderAssigned = true;
				}
				if(typeof(response.data.plannerScheduledTime) !== 'undefined') {
					$scope.ticketConfirmed = true;
				}
			});

  });
