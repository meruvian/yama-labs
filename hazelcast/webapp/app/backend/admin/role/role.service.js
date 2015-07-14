'use strict';

angular.module('hazelcastApp').factory('Roles', function (Restangular) {
	return Restangular.service('roles');
});
