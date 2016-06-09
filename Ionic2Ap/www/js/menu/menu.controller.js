(function() {
	'use strict';

	angular
		.module('societyApp.menu')
		.controller('MenuController', MenuController);

	MenuController.$inject = ['$window','$location'];

	/* @ngInject */
	function MenuController($window,$location,$timeout) 
	{

		var vm = this;
		vm.logout = function logout()
		{
			
			$window.localStorage.accesstoken = null;

			$location.path('/login');  
    
		}
	}
})();