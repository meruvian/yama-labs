'use strict';

angular.module('websocketApp').config(function ($stateProvider) {
	$stateProvider.state('backend', {
		url: '/backend',
		templateUrl: 'backend/backend.html',
		controller: 'BackendCtrl'
	});
});
