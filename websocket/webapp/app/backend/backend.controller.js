'use strict';

angular.module('websocketApp').controller('BackendCtrl', function ($state) {
	if ('backend' === $state.current.name) {
		$state.transitionTo('backend.dashboard');
	}
});
