'use strict';

angular.module('hazelcastApp').config(function ($stateProvider) {
	$stateProvider.state('backend.dashboard', {
		url: '/dashboard',
		templateUrl: 'backend/admin/dashboard/dashboard.html',
		controller: 'DashboardCtrl'
	});
});
