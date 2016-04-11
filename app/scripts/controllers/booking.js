'use strict';

angular.module('indiaworks16App')
  .controller('BookingCtrl', function ($scope, $routeParams, $location, localStorageService, ApiService) {
  	// var tickets = [];
   //  if(localStorageService.get('bookedServices')) {
   //    tickets = localStorageService.get('bookedServices');
   //  } else {
   //    tickets = [];
   //  }

    // ApiService.getSubCategoryAndServiceList()
    ApiService.getSubCategoryList()
      .then(function (response) {
        $scope.subCatList = response.data;
      });
    ApiService.getServiceList()
      .then(function (response) {
        $scope.serviceList = response.data;
      });

    $scope.selectedCategoryId = $routeParams.categoryId;
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

    $scope.checkSelectSubCat = false;
    $scope.checkConfirm = false;  

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

      ApiService.createTicket(ticket)
        .success(function (response) {
          console.log(response);
        })
        .error(function (err) {
          console.log(err);
          alert('error');
        });

      $scope.checkClickBookNow = true;
      $scope.recentTicket = ticket;

      alert('Booked successfully');
    };

    $scope.confirmOrder = function () {
      $location.path('/bookingDetails/' + 'yourId');
    };

  });
