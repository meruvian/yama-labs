'use strict';

angular.module('redisApp').config(function ($stateProvider) {
	$stateProvider.state('login', {
		url: '/login',
		controller: 'LoginCtrl'
	});

	$stateProvider.state('logout', {
		url: '/logout',
		controller: 'LogoutCtrl'
	});
});
