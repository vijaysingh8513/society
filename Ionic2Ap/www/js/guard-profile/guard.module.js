(function() {
	'use strict';

	angular
		.module('societyApp.guard-profile', [
			'ionic',
			
			
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.guard_profile', {
					url: '/guardprofile',
					cache: false,
					views: {
						'menuContent': {
							templateUrl: 'js/guard-profile/guard.html',
							controller: 'GuardController as vm'
						}
					}
				})
				
		});
})();