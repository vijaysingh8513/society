(function() {
	'use strict';

	angular
		.module('societyApp.menu', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app', {
					url: '/app',
					abstract: true,
					templateUrl: 'js/menu/menu.html',
					controller: 'MenuController as vm'
				});
		});
})();