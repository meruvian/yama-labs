'use strict';

angular.module('redisApp').controller('LoginCtrl', function () {
	// do nothing
}).controller('LogoutCtrl', function($state, $http, YamaOAuth) {
	$http.get('/auth/logout').success(function() {
		YamaOAuth.logout();
	});
});
