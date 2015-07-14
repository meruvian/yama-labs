'use strict';

angular.module('hazelcastApp').controller('MainCtrl', function ($state) {
	$state.go('backend.dashboard');
});
