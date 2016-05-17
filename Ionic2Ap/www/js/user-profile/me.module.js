(function() {
	'use strict';

	angular
		.module('societyApp.user-profile', [
			'ionic',
			
			
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.user-profile', {
					url: '/profile',
					cache: false,
					views: {
						'menuContent': {
							templateUrl: 'js/user-profile/me.html',
							controller: 'MeController as vm'
						}
					}
				})
				
		});
})();