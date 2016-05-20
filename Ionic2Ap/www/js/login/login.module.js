(function() {
	'use strict';

	angular
		.module('societyApp.login', [
			'ionic',
			
			
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('login', {
					url: '/login',
					cache: false,
							
					templateUrl: 'js/login/login.html',
					controller: 'LoginController as vm'
						
				})
				
		});
})();