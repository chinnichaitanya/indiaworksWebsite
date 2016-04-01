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

    $scope.selectedCategory = '';
    $scope.selectedSubCat = '';
    $scope.selectedService = '';
    $scope.selectedArea = '';

    $scope.bookDate = '';
    $scope.bookTime = '';
    $scope.userName = '';
    $scope.houseNumber = '';
    $scope.address1 = '';
    $scope.address2 = '';
    $scope.landmarks = '';
    $scope.email = '';
    $scope.phoneNumber = '';
    $scope.additionalComments = '';

    $scope.checkSelectCategory = false;
    $scope.checkSelectSubCat = false;
    $scope.checkClickBookNow = false;

    $scope.categoryList = [{
      'name': 'Electrician',
      '_id': 'cat_one'
    },
    {
      'name': 'Plumber',
      '_id': 'cat_two'
    },
    {
      'name': 'Carpentry',
      '_id': 'cat_three'
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
    	document.getElementById('serviceName').src='images/plumbing-01-onhover-01.png';
    };

    $scope.changeServiceHoverImageBack = function () {
    	document.getElementById('serviceName').src='images/plumbing-01-01.png';
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

    $scope.gotoBookNow = function () {
      if($scope.selectedSubCat && $scope.selectedService && $scope.selectedArea) {
        $scope.checkSelectSubCat = true;
      } else {
        // Put error message here
        
      }
    };

    $scope.bookNow = function () {
      console.log('yay');
    };

    // GeoLocationService.getCurrentLocation().then(function (onUserLocationFound) {
    // 	var x = onUserLocationFound;
    // 	console.log(x);
    // });

  });
