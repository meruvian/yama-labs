'use strict';

angular.module('redisApp').config(function ($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		controller: 'MainCtrl'
	});
});
