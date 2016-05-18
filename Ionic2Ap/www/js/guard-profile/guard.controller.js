(function() {
	'use strict';

	angular
		.module('societyApp.guard-profile')
		.controller('GuardController', GuardController);

	GuardController.$inject = ['$scope','$window','$ionicNavBarDelegate','menuItems'];

	/* @ngInject */
	function GuardController($scope,$window,$ionicNavBarDelegate,menuItems) 
	{
	//	var vm = this;
	//	vm.myDetails = $window.localStorage.username;
	 $ionicNavBarDelegate.showBackButton(false);
	var objval = $window.localStorage.getItem('userobj');
	var parsedobj = JSON.parse(objval)
                        
       
		var vm = angular.extend(this, {
			entries: menuItems,
		    myDetails:parsedobj
		});


vm.title = "Welcome "+vm.myDetails.username+" !";
		
	}
})();