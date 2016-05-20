(function() {
	'use strict';

	angular
		.module('societyApp.tenant-profile')
		.controller('TenantController', TenantController);

	TenantController.$inject = ['$scope','$window','$ionicNavBarDelegate','menuItemsTenant'];

	/* @ngInject */
	function TenantController($scope,$window,$ionicNavBarDelegate,menuItemsTenant) 
	{
	//	var vm = this;
	//	vm.myDetails = $window.localStorage.username;
	
	 
	var objval = $window.localStorage.getItem('userobj');
	var parsedobj = JSON.parse(objval)
                        
       
		var vm = angular.extend(this, {
			entries: menuItemsTenant,
		    myDetails:parsedobj
		});



vm.title = "Welcome "+vm.myDetails.username+" !";
		
	}
})();