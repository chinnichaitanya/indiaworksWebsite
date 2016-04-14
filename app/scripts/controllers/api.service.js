'use strict';

angular.module('indiaworks16App')
  .service('ApiService', function ($http) {

    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      getCategoryList: function () {
        return $http.get('http://localhost:8001/api/categories').then(function (response) {
          return response;
        });
      },
      getSubCategoryList: function () {
        return $http.get('http://localhost:8001/api/subCategories').then(function (response) {
          return response;
        });
      },
      getServiceList: function () {
        return $http.get('http://localhost:8001/api/services').then(function (response) {
          return response;
        });
      },
      // Something wrong with this api in the server code
      getSubCategoryAndServiceList: function (categoryId) {
        return $http.get('http://localhost:8001/api/categories/populateSubCatServices/' + categoryId).then(function (response) {
          return response;
        });        
      },
      getSubCatsList: function (categoryId) {
        return $http.get('http://localhost:8001/api/categories/populateSubCats/' + categoryId).then(function (response) {
          return response;
        });        
      },
      getServicesList: function (subCatId) {
        return $http.get('http://localhost:8001/api/subCategories/populateServices/' + subCatId).then(function (response) {
          return response;
        });        
      },
      getTicketDetails: function (ticketId) {
        return $http.get('http://localhost:8001/api/tickets/' + ticketId).then(function (response) {
          return response;
        });
      },
      createTicket: function (data) {
        console.log(data);
        return $http.post('http://localhost:8001/api/tickets', data).then(function (response) {
          return response;
        });        
      }
    };

  });
