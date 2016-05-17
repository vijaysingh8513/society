(function() {
	'use strict';

	angular
		.module('societyApp.login', [
			'ionic',
			
			
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.login', {
					url: '/login',
					cache: false,
					views: {
						'menuContent': {
							templateUrl: 'js/login/login.html',
							controller: 'LoginController as vm'
						}
					}
				})
				
		});
})();