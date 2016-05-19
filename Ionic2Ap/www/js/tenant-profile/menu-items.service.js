(function() {
	'use strict';

	angular
		.module('societyApp.tenant-profile')
		.factory('menuItemsTenant', menuItemsTenant);

	menuItemsTenant.$inject = [];

	/* @ngInject */
	function menuItemsTenant() {
		var data = [{
			title: 'Complaint Register',
			path: 'articles',
			icon: 'ion-speakerphone'
		}, {
			title: 'Society maintenance',
			path: 'products-extended',
			icon: 'ion-android-cart'
		}, {
			title: 'Request For Vendor Access',
			path: 'galleries',
			icon: 'ion-images'
		}, {
			title: 'Message Board',
			path: 'map',
			icon: 'ion-map'
		},
		{
			title: 'Settings',
			path: 'map',
			icon: 'ion-map'
		}];

		return data;
	}
})();