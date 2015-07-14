'use strict';

angular.module('hazelcastApp').controller('BackendCtrl', function ($state) {
	if ('backend' === $state.current.name) {
		$state.transitionTo('backend.dashboard');
	}
});
