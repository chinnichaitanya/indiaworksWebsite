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
  // .controller('MainCtrl', function ($scope, GeoLocationService) {

    $scope.selectedCategory = "";
    $scope.selectedSubCat = "";
    $scope.selectedService = "";
    $scope.selectedArea = "";

    $scope.checkSelectCategory = false;
    $scope.checkClickBookNow = true;

    $scope.categoryList = [{
      'name': 'Cat 1',
      '_id': 'cat_one'
    },
    {
      'name': 'Cat 2',
      '_id': 'cat_two'
    },
    {
      'name': 'Cat 3',
      '_id': 'cat_three'
    },
    {
      'name': 'Cat 4',
      '_id': 'cat_four'
    }];

    $scope.subCatList = [{
      'name': 'SubCat 1',
      '_id': 'subcat_one'
    },
    {
      'name': 'SubCat 2',
      '_id': 'subcat_two'
    },
    {
      'name': 'SubCat 3',
      '_id': 'subcat_three'
    },
    {
      'name': 'SubCat 4',
      '_id': 'subcat_four'
    }];

    $scope.serviceList = [{
      'name': 'Service 1',
      '_id': 'service_one'
    },
    {
      'name': 'Service 2',
      '_id': 'service_two'
    },
    {
      'name': 'Service 3',
      '_id': 'service_three'
    },
    {
      'name': 'Service 4',
      '_id': 'service_four'
    }];    

    $scope.sampleServices = [{
      'name': 'Service 1',
      'originalImg': 'images/plumbing-01-01.png',
      'hoverImg': 'images/plumbing-01-onhover-01.png'
    },
    {
      'name': 'Service 1',
      'originalImg': 'images/plumbing-01-01.png',
      'hoverImg': 'images/plumbing-01-onhover-01.png'
    },
    {
      'name': 'Service 1',
      'originalImg': 'images/plumbing-01-01.png',
      'hoverImg': 'images/plumbing-01-onhover-01.png'
    },
    {
      'name': 'Service 1',
      'originalImg': 'images/plumbing-01-01.png',
      'hoverImg': 'images/plumbing-01-onhover-01.png'
    },
    {
      'name': 'Service 1',
      'originalImg': 'images/plumbing-01-01.png',
      'hoverImg': 'images/plumbing-01-onhover-01.png'
    },
    {
      'name': 'Service 1',
      'originalImg': 'images/plumbing-01-01.png',
      'hoverImg': 'images/plumbing-01-onhover-01.png'
    },
    {
      'name': 'Service 1',
      'originalImg': 'images/plumbing-01-01.png',
      'hoverImg': 'images/plumbing-01-onhover-01.png'
    }];

    $scope.changeServiceHoverImage = function () {
    	document.getElementById("serviceName").src="images/plumbing-01-onhover-01.png";
    };

    $scope.changeServiceHoverImageBack = function () {
    	document.getElementById("serviceName").src="images/plumbing-01-01.png";
    };

    $scope.keyPress = function (clickEvent) {
      if(clickEvent.keyCode === 13) {
        if($scope.selectedCategory._id) {
          $scope.checkSelectCategory = true;
        } else {
          // Put error message here
          
        }
      }
    };

    // GeoLocationService.getCurrentLocation().then(function (onUserLocationFound) {
    // 	var x = onUserLocationFound;
    // 	console.log(x);
    // });

  });
