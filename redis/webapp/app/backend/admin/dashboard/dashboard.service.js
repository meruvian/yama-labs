'use strict';

angular.module('redisApp').factory('Dashboards', function (Restangular) {
	return {
		metrics: Restangular.service('actuator/metrics')
	};
});
