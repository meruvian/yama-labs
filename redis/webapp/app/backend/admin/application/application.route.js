'use strict';

angular.module('redisApp').config(function ($stateProvider) {
	$stateProvider.state('backend.application', {
		url: '/admin/application',
		templateUrl: 'backend/admin/application/application.html',
		controller: 'ApplicationCtrl'
	});
});
