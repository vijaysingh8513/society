(function() {
	'use strict';

	angular
		.module('societyApp.admin-profile')
		.factory('menuItemsAdmin', menuItemsAdmin);

	menuItemsAdmin.$inject = [];

	/* @ngInject */
	function menuItemsAdmin() {
		var data = [{
			title: 'Society Complaints',
			path: 'articles',
			icon: 'ion-speakerphone'
		}, {
			title: 'Approval Requests',
			path: 'products-extended',
			icon: 'ion-android-cart'
		}, {
			title: 'Send Message to Members',
			path: 'galleries',
			icon: 'ion-images'
		}, {
			title: 'Message Board',
			path: 'map',
			icon: 'ion-map'
		}];

		return data;
	}
})();