'use strict';

angular.module('redisApp').controller('BackendCtrl', function ($state) {
	if ('backend' === $state.current.name) {
		$state.transitionTo('backend.dashboard');
	}
});
