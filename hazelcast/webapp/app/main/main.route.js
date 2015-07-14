'use strict';

angular.module('hazelcastApp').config(function ($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		controller: 'MainCtrl'
	});
});
