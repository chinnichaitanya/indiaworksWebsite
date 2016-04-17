'use strict';

angular.module('indiaworks16App')
  .service('ApiService', function ($http) {

    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      getAllCategoryList: function (populateSubCategory, populateService) {
        return $http.get('http://localhost:8001/api/categories/?sub_category=' + populateSubCategory + '&service=' + populateService).then(function (response) {
          return response;
        });        
      },
      getSingleCategory: function (categoryId, populateSubCategory, populateService) {
        return $http.get('http://localhost:8001/api/categories/' + categoryId + '/?sub_category=' + populateSubCategory + '&service=' + populateService).then(function (response) {
          return response;
        });      
      },
      getAllSubCategoryList: function (populateService) {
        return $http.get('http://localhost:8001/api/sub-categories/?service=' + populateService).then(function (response) {
          return response;
        });
      },
      getSingleSubCategory: function (subCatId, populateService) {
        return $http.get('http://localhost:8001/api/sub-categories/' + subCatId + '?service=' + populateService).then(function (response) {
          return response;
        });         
      },
      getAllServiceList: function () {
        return $http.get('http://localhost:8001/api/services').then(function (response) {
          return response;
        });
      },
      getSingleService: function (serviceId) {
        return $http.get('http://localhost:8001/api/services/' + serviceId).then(function (response) {
          return response;
        });
      },
      // Can club this with something like getAllTickets()? Or security issues?
      getAllTicketDetailsByCurrentUser: function (populateCategory, populateSubCategory, populateService) {
        return $http.get('http://localhost:8001/api/tickets/?category=' + populateCategory + '&sub_category=' + populateSubCategory + '&service=' + populateService).then(function (response) {
          return response;
        });
      }, 
      getSingleTicketDetails: function (ticketId, populateCategory, populateSubCategory, populateService) {
        return $http.get('http://localhost:8001/api/tickets/' + ticketId + '?category=' + populateCategory + '&sub_category=' + populateSubCategory + '&service=' + populateService).then(function (response) {
          return response;
        });
      },
      createTicket: function (data) {
        return $http.post('http://localhost:8001/api/tickets', data).then(function (response) {
          return response;
        });        
      }
    };

  });
