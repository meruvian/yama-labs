'use strict';

angular.module('websocketApp').config(function ($stateProvider) {
	$stateProvider.state('backend.profile', {
		url: '/account/profile',
		templateUrl: 'backend/account/profile/profile.html',
		controller: 'ProfileCtrl'
	});
});
