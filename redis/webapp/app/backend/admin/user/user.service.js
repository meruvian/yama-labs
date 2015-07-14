'use strict';

angular.module('redisApp').factory('Users', function (Restangular) {
	return Restangular.service('users');
});
