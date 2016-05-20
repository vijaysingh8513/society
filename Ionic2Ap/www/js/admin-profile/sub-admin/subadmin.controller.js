(function() {
	'use strict';

	angular
		.module('societyApp.admin-profile')
		.controller('SubAdminController', SubAdminController);

	SubAdminController.$inject = ['$scope','$window','$ionicNavBarDelegate','menuItemsAdmin'];

	/* @ngInject */
	function SubAdminController($scope,$window,menuItemsAdmin) 
	{
	//	var vm = this;
	//	vm.myDetails = $window.localStorage.username;
	// $ionicNavBarDelegate.showBackButton(false);
	
	var objval = $window.localStorage.getItem('userobj');
	var parsedobj = JSON.parse(objval)
                        
       
		var vm = angular.extend(this, {
			entries: menuItemsAdmin,
		    myDetails:parsedobj
		});


vm.title = "Welcome "+vm.myDetails.username+" !";
		
	}
})();