'use strict';

angular.module('indiaworks16App')
  .factory('GeoLocationService', function ($q, $window) {

  	function getCurrentLocation() {
  		var deferred = $q.defer();

  		if(!$window.navigator.geolocation) {
  			deferred.reject('Geolocation not supported!');
  		} else {
  			$window.navigator.geolocation.getCurrentPosition(function (position) {
  				deferred.resolve(position);
  			}, function (err) {
					deferred.reject(err);  				
  			});
  		}

  		return deferred.promise;
  	}

  	return {
  		getCurrentLocation: getCurrentLocation
  	};

  });
