'use strict';

angular.module('hazelcastApp').factory('Users', function (Restangular) {
	return Restangular.service('users');
});
