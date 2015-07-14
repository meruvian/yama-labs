'use strict';

angular.module('hazelcastApp').config(function ($stateProvider) {
	$stateProvider.state('login', {
		url: '/login',
		controller: 'LoginCtrl'
	});

	$stateProvider.state('logout', {
		url: '/logout',
		controller: 'LogoutCtrl'
	});
});
