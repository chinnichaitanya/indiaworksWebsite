'use strict';

angular.module('indiaworks16App')
  .controller('BookingCtrl', function ($scope, $routeParams, $location, localStorageService, ApiService) {
    // var tickets = [];
   //  if(localStorageService.get('bookedServices')) {
   //    tickets = localStorageService.get('bookedServices');
   //  } else {
   //    tickets = [];
   //  }
    
    $scope.subCatList = [];
    $scope.serviceList = [];

    // ApiService.getSubCategoryAndServiceList()
    $scope.categoryId = $routeParams.categoryId;
    ApiService.getSingleCategory($scope.categoryId, true, false)
      .then(function (response) {
        $scope.subCatList = response.data.subCategories;
      });

    $scope.selectedCategoryId = $routeParams.categoryId;
    $scope.selectedSubCat = '';
    $scope.selectedService = '';
    $scope.selectedArea = '';

    $scope.bookDate = '';
    $scope.bookTime = '';
    $scope.userName = 'name';
    $scope.houseNumber = 'house';
    $scope.address1 = 'add1';
    $scope.address2 = 'ad2';
    $scope.landmarks = 'landmarks';
    $scope.email = 'email';
    $scope.phoneNumber = 'phone';
    $scope.additionalComments = 'comments';

    $scope.checkSelectSubCat = false;
    $scope.checkConfirm = false;  
    
    // Populate the services for a selected sub-category
    $scope.populateServies = function () {
      if($scope.selectedSubCat._id) {
        ApiService.getSingleSubCategory($scope.selectedSubCat._id, true)
          .then(function (response) {
            $scope.serviceList = response.data.services;
          });        
      } else {
        // Required because we need to remove the services populated once the user removes the sub-cat selected
        $scope.serviceList = [];
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
      ticket.category = $scope.selectedCategoryId;
      ticket.subCategory = $scope.selectedSubCat._id;
      ticket.service = $scope.selectedService._id;
      ticket.area = $scope.selectedArea;

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

      console.log(ticket);
        
      $scope.checkClickBookNow = true;
      $scope.recentTicket = ticket;
    };

    $scope.confirmOrder = function () {
      var ticketId = '';
      console.log($scope.recentTicket);
      ApiService.createTicket($scope.recentTicket)
        .then(function (response) {
          console.log(response);
          ticketId = response.data._id;
          // Have to optimise this transition
          $location.path('/booking-details/' + ticketId);
        });
    };

  });
