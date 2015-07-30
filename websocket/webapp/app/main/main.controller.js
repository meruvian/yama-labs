'use strict';

angular.module('websocketApp').controller('MainCtrl', function ($state) {
	$state.go('backend.dashboard');
});
