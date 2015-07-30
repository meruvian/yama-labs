'use strict';

angular.module('websocketApp').factory('Registers', function (Restangular) {
	return Restangular.service('signup');
});
