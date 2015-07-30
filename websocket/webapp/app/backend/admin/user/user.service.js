'use strict';

angular.module('websocketApp').factory('Users', function (Restangular) {
	return Restangular.service('users');
});
