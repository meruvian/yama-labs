'use strict';

angular.module('redisApp').factory('Registers', function (Restangular) {
	return Restangular.service('signup');
});
