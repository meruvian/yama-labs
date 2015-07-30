'use strict';

angular.module('websocketApp').config(function ($stateProvider) {
	$stateProvider.state('backend.user', {
		url: '/admin/user',
		templateUrl: 'backend/admin/user/user.html',
		controller: 'UserCtrl'
	});
});
