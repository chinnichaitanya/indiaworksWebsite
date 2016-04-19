'use strict';

angular.module('indiaworks16App')
  .controller('ProfileCtrl', function ($scope, $location, $routeParams) {
  	
  	// initialization
  	$scope.view = 'overview';
  	$scope.profileElements = [{
  		'view': 'overview',
  		'name': 'Overview'
  	},
  	{
  		'view': 'finished_services',
  		'name': 'Finished Services'
  	},
  	{
  		'view': 'upcoming_services',
  		'name': 'Upcoming Services'
  	},
  	{
  		'view': 'profile_details',
  		'name': 'Your Profile'
  	}];

  	// populating details
    function populateDetails () {
      // Can optimize this code :/
      var numProfileElements = $scope.profileElements.length;
      for(var i=0; i<numProfileElements; i++) {
        if($routeParams.view === $scope.profileElements[i].view) {
          $scope.view = $scope.profileElements[i].view;
        }
      }
    }
  	populateDetails();

  	// check for which profileElement is active
  	$scope.activeProfile = function (profileIndex) {
  		if($scope.view === $scope.profileElements[profileIndex].view) {
  			return true;
  		}
      return false;
  	};

    // change the details on clicking profile-menu
    $scope.changeProfileContent = function (profileIndex) {
      // populate content here
      console.log('profile?view=' + $scope.profileElements[profileIndex].view);
      $location.path('profile?view=' + $scope.profileElements[profileIndex].view);
    };

  });
