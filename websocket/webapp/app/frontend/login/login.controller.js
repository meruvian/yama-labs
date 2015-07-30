'use strict';

angular.module('websocketApp').controller('LoginCtrl', function () {
	// do nothing
}).controller('LogoutCtrl', function($state, $http, YamaOAuth) {
	$http.get('/auth/logout').success(function() {
		YamaOAuth.logout();
	});
});
