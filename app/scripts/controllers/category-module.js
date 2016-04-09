'use strict';

angular.module('indiaworks16App')
  .controller('CategoryModuleCtrl', function ($scope, $location) {
    $scope.selectedCategory = '';
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

    $scope.keyPress = function (clickEvent) {
      if(clickEvent.keyCode === 13) {
        if($scope.selectedCategory._id) {
          $location.path('book/' + $scope.selectedCategory.name);
        } else {
          // Put error message here
          
        }
      }
    };

  });
