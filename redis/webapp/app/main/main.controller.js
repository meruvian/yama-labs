'use strict';

angular.module('redisApp').controller('MainCtrl', function ($state) {
	$state.go('backend.dashboard');
});
