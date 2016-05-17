(function() {
	'use strict';

	angular
		.module('societyApp.user-profile')
		.controller('MeController', MeController);

	MeController.$inject = ['$scope','$window','$ionicNavBarDelegate','menuItems'];

	/* @ngInject */
	function MeController($scope,$window,$ionicNavBarDelegate,menuItems) 
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