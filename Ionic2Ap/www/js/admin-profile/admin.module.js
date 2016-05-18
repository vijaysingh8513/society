(function() {
	'use strict';

	angular
		.module('societyApp.admin-profile', [
			'ionic',
			
			
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.admin_profile', {
					url: '/adminprofile',
					cache: false,
					views: {
						'menuContent': {
							templateUrl: 'js/admin-profile/admin.html',
							controller: 'AdminController as vm'
						}
					}
				})
				
		});
})();