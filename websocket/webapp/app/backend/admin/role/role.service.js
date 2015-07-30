'use strict';

angular.module('websocketApp').factory('Roles', function (Restangular) {
	return Restangular.service('roles');
});
