'use strict';

/**
 * @ngdoc function
 * @name indiaworks16App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the indiaworks16App
 */
angular.module('indiaworks16App')
  .controller('MainCtrl', function ($scope, localStorageService) {
  // .controller('MainCtrl', function ($scope, GeoLocationService) {

    var tickets = [];
    if(localStorageService.get('bookedServices')) {
      tickets = localStorageService.get('bookedServices');
    } else {
      tickets = [];
    }

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
      'name': 'Fan repair',
      '_id': 'subcat_one'
    },
    {
      'name': 'AC maintenance',
      '_id': 'subcat_two'
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
      var ticket = {};
      ticket.selectedCategory = $scope.selectedCategory;
      ticket.selectedSubCat = $scope.selectedSubCat;
      ticket.selectedService = $scope.selectedService;
      ticket.selectedArea = $scope.selectedArea;

      ticket.bookDate = $scope.bookDate;
      ticket.bookTime = $scope.bookTime;
      ticket.userName = $scope.userName;
      ticket.houseNumber = $scope.houseNumber;
      ticket.address1 = $scope.address1;
      ticket.address2 = $scope.address2;
      ticket.landmarks = $scope.landmarks;
      ticket.email = $scope.email;
      ticket.phoneNumber = $scope.phoneNumber;
      ticket.additionalComments = $scope.additionalComments;

      tickets.push(ticket);

      console.log(ticket);
      console.log(tickets);

      localStorageService.set('bookedServices', tickets);

      $scope.checkClickBookNow = true;
      $scope.recentTicket = ticket;

      alert('Booked successfully');
    };

    // GeoLocationService.getCurrentLocation().then(function (onUserLocationFound) {
    // 	var x = onUserLocationFound;
    // 	console.log(x);
    // });

  });
