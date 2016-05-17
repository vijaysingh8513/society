(function() {
	'use strict';

	angular
		.module('societyApp.login')
		.controller('LoginController', LoginController);

	LoginController.$inject = ['$scope','$window','$location','$state','LoginDataService'];

	/* @ngInject */
	function LoginController($scope,$window,$location,$state,LoginDataService) 
	{

		document.getElementById("formregister").style.display = "none";
		document.getElementById("wrongcredentials").style.display = "none";
		document.getElementById("servererror").style.display = "none";

		
		var vm = this;

		vm.loginForm = {
      username : "",
      password : ""
    };
    
	function login()
    {
    	LoginDataService.Login(vm.loginForm.username,vm.loginForm.password, function (response, status, headers, config) 
			{
				
                if (response) 
                {
					if(status == 200)
					{
						var userobj = {};
						userobj.role = response.results[0].role;
						userobj.username = response.userName;
                        
                        if($window.localStorage.accesstoken == null)
                        {
                        	$window.localStorage.accesstoken = response.access_token;
                        }
						
						$window.localStorage.setItem('userobj', JSON.stringify(userobj));
						
						$state.go("app.user-profile");

					}
					else if(status == 401)
					{
						
						document.getElementById("wrongcredentials").style.display = "block";
						//window.location = "/";

					}
                } 
                else 
                {
                    //FlashService.Error(response.message);
                    //vm.dataLoading = false;
					document.getElementById("servererror").style.display = "block";
					
                }
			});
	  
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
