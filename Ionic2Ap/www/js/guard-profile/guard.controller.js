(function() {
	'use strict';

	angular
		.module('societyApp.guard-profile')
		.controller('GuardController', GuardController);

	GuardController.$inject = ['$scope','$window','$ionicNavBarDelegate','menuItemsGuard'];

	/* @ngInject */
	function GuardController($scope,$window,$ionicNavBarDelegate,menuItemsGuard) 
	{
	//	var vm = this;
	//	vm.myDetails = $window.localStorage.username;
	 $ionicNavBarDelegate.showBackButton(false);
	var objval = $window.localStorage.getItem('userobj');
	var parsedobj = JSON.parse(objval)
                        
       
		var vm = angular.extend(this, {
			entries: menuItemsGuard,
		    myDetails:parsedobj
		});


vm.title = "Welcome "+vm.myDetails.username+" !";
		
	}
})();