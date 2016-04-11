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
      // getSubCategoryAndServiceList: function () {
      //   return $http.get('').then(function (response) {
      //     return response;
      //   });        
      // },
      createTicket: function (data) {
        return $http.post('http://localhost:8001/api/tickets', data).then(function (response) {
          return response;
        });        
      }
    };
    

  });
