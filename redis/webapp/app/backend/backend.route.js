'use strict';

angular.module('redisApp').config(function ($stateProvider) {
	$stateProvider.state('backend', {
		url: '/backend',
		templateUrl: 'backend/backend.html',
		controller: 'BackendCtrl'
	});
});
