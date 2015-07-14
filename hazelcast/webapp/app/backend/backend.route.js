'use strict';

angular.module('hazelcastApp').config(function ($stateProvider) {
	$stateProvider.state('backend', {
		url: '/backend',
		templateUrl: 'backend/backend.html',
		controller: 'BackendCtrl'
	});
});
