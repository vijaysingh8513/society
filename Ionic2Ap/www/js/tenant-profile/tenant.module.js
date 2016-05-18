(function() {
	'use strict';

	angular
		.module('societyApp.tenant-profile', [
			'ionic',
			
			
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.tenant_profile', {
					url: '/tenantprofile',
					cache: false,
					views: {
						'menuContent': {
							templateUrl: 'js/tenant-profile/tenant.html',
							controller: 'TenantController as vm'
						}
					}
				})
				
		});
})();