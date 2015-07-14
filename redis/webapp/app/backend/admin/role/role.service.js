'use strict';

angular.module('redisApp').factory('Roles', function (Restangular) {
	return Restangular.service('roles');
});
