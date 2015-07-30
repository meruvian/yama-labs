'use strict';

angular.module('websocketApp').factory('Applications', function (Restangular) {
	return Restangular.service('applications');
});
