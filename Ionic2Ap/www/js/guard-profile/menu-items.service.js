(function() {
	'use strict';

	angular
		.module('societyApp.guard-profile')
		.factory('menuItemsGuard', menuItemsGuard);

	menuItemsGuard.$inject = [];

	/* @ngInject */
	function menuItemsGuard() {
		var data = [{
			title: 'Request Access From Tenant ',
			path: 'articles',
			icon: 'ion-speakerphone'
		}, {
			title: 'Maid Attendance',
			path: 'products-extended',
			icon: 'ion-android-cart'
		}];

		return data;
	}
})();