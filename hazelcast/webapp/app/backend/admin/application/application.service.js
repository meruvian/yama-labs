'use strict';

angular.module('hazelcastApp').factory('Applications', function (Restangular) {
	return Restangular.service('applications');
});
