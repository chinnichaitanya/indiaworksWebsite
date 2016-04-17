'use strict';

angular.module('indiaworks16App')
  .controller('CategoryModuleCtrl', function ($scope, $location, ApiService) {
    $scope.selectedCategory = '';

    ApiService.getAllCategoryList(false, false)
      .then(function (response) {
        console.log(response);
        
        $scope.categoryList = response.data;        
      });

    $scope.keyPress = function (clickEvent) {
      if(clickEvent.keyCode === 13) {
        if($scope.selectedCategory._id) {
          $location.path('book/' + $scope.selectedCategory._id);
        } else {
          // Put error message here
          
        }
      }
    };

  });
