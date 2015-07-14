'use strict';

angular.module('hazelcastApp').config(function ($stateProvider) {
	$stateProvider.state('backend.role', {
		url: '/admin/role',
		templateUrl: 'backend/admin/role/role.html',
		controller: 'RoleCtrl'
	});
});
