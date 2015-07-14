'use strict';

angular.module('redisApp').factory('Applications', function (Restangular) {
	return Restangular.service('applications');
});
