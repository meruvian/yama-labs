'use strict';

angular.module('hazelcastApp').factory('Registers', function (Restangular) {
	return Restangular.service('signup');
});
