'use strict';

angular.module('redisApp').config(function ($stateProvider) {
	$stateProvider.state('backend.profile', {
		url: '/account/profile',
		templateUrl: 'backend/account/profile/profile.html',
		controller: 'ProfileCtrl'
	});
});
