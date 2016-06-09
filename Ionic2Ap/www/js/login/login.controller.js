(function() {
	'use strict';

	angular
		.module('societyApp.login')
		.controller('LoginController', LoginController);

	LoginController.$inject = ['$scope','$window','$location','$state','$ionicSlideBoxDelegate','$ionicModal','$timeout',
	'LoginDataService'];

	/* @ngInject */
	function LoginController($scope,$window,$location,$state,$ionicSlideBoxDelegate,$ionicModal,$timeout,LoginDataService) 
	{

			doAutoLogin();
		var vm = this;
		
 		vm.images = ["banner.jpg","banner1.jpg","banner2.jpg","banner3.jpg","banner4.jpg","banner5.jpg"];
		
		

		$scope.loginForm = 
		{
      			username : "",
      			password : ""
    	};

    vm.bannerHeight = $window.innerHeight;

    $scope.closeModal = function() 
    {

   	 	$scope.modal.hide();
 	};

   //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
    
vm.openPopup=  function openPopup(type)
{
	if(type ==  'sign-in')
	{
		$ionicModal.fromTemplateUrl('js/login/loginpopup.html', {
	    scope: $scope,
	    animation:'slide-in-down'
	    }).then(function(modal) 
	    {
	  	
	    $scope.modal = modal;
	     $scope.modal.show();
	 	});
	}
	else
	{
		$ionicModal.fromTemplateUrl('js/login/registerpopup.html', {
	    scope: $scope,
	    animation:'slide-in-down'
	    }).then(function(modal) 
	    {
	  	
	    $scope.modal = modal;
	     $scope.modal.show();
	 	});
	}

}
	$scope.login = function ()
    {
    	LoginDataService.Login($scope.loginForm.username,$scope.loginForm.password, function (response, status, headers, config) 
		{

				
            if (response) 
            {

            	
				if(status == 200)
				{
					var userobj = {};
					userobj.role = response.results[0].role;
					userobj.username = response.userName;
					if($window.localStorage.accesstoken == "null")
                    {
                    	$window.localStorage.accesstoken = response.access_token;
                    	
                    }
                   // console.log($window.localStorage.accesstoken);
                   $scope.modal.remove();
					
					$window.localStorage.setItem('userobj', JSON.stringify(userobj));
					
					if(userobj.role == "admin")
					{
						$state.go("app.admin_profile");
					}
					else if(userobj.role == "tenant")
					{
						$state.go("app.tenant_profile");
					}
					else if(userobj.role == "guard")
					{
						$state.go("app.guard_profile");
					}
                        

					}
					else if(status == 401)
					{
						
						document.getElementById("wrongcredentials").style.display = "block";
						$timeout(function() {
       					 window.location = "/";
    }, 3000);
						//window.location = "/";

					}
                } 
                else 
                {
                    //FlashService.Error(response.message);
                    //vm.dataLoading = false;
					document.getElementById("servererror").style.display = "block";
					$timeout(function() {
       					 window.location = "/";
    }, 3000);
					
                }
			});
	  
    }

    function doAutoLogin()
    {
    	
    	$timeout(function() 
    	{
       	
  			  $ionicSlideBoxDelegate.update();
  			   }, 2000);
    
   	}


	

	vm.onLoginSubmit = function onLoginSubmit()
	{
		 
		login();
		
	}

	  vm.onRegisterSubmit = function onRegisterSubmit()
	  {
		  //alert(vm.register.username)
			LoginDataService.Login(vm.loginForm.username,vm.loginForm.password, function (response, status, headers, config) 
			{
                if (response) 
                {
					if(status == 200)
					{

					}
					else
					{

					}
                    
                } 
                else 
                {
                    console.log(response);
                }
			});
	  
		
		}

		vm.onRegister = function onRegister()
		{

			document.getElementById("formlogin").style.display = "none";
			document.getElementById("formregister").style.display = "block";
			document.getElementById("wrongcredentials").style.display = "none";
			document.getElementById("servererror").style.display = "none";

			
		}
		vm.onLogin = function onLogin()
		{

			document.getElementById("formlogin").style.display = "block";
			document.getElementById("formregister").style.display = "none";
			document.getElementById("wrongcredentials").style.display = "none";
			document.getElementById("servererror").style.display = "none";

			
		}


	}
})();
